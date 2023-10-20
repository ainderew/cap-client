import { Badge, Popover } from "antd";
import React, { useEffect, useState } from "react";
import IconContainer from "../../iconContainer";
import { NotificationOutlined } from "@ant-design/icons";
import NotificationBar from "../../notification";
import useStores from "@/core/stores/UseStores";
import useFetchData from "@/hooks/useFetchData";
import { config } from "../../../../config";
import usePostData from "@/hooks/usePostData";

interface Data{
  count:number;
}

function NotificationSection(): React.ReactElement {
  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id
  const[notifCount, setNotifCount] = useState<any>()
  const[isNotifClicked, setIsNotifClicked] = useState(false)
  const body = { businessId: businessId }
  
  const { handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/notification/trigger`)

  const handleTrigger = async (): Promise<void> => {
    setIsNotifClicked(true)
    await handlePostRequest(body)
    setIsNotifClicked(false)
  }

  const { data,  refetch } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/notification/hasnotification/${businessId ?? ''}`
  )

  useEffect(()=>{
    if (data === null) return
    const {count} = data as Data
    setNotifCount(count)
  },[data])

  useEffect(()=>{
    if(isNotifClicked) return
    refetch()
  },[isNotifClicked])

  return (
    <Popover content={<NotificationBar />} trigger={"click"}>
      <div onClick={()=> handleTrigger()}>
      <Badge count={notifCount || 0}>
        <IconContainer>
          <NotificationOutlined />
          <div className="rounded-full"></div>
        </IconContainer>
      </Badge>
      </div>
    </Popover>
  );
}

export default NotificationSection;
