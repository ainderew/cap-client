import { Badge, Popover } from "antd";
import React, { useEffect, useState } from "react";
import IconContainer from "../../iconContainer";
import { NotificationOutlined } from "@ant-design/icons";
import NotificationBar from "../../notification";
import useStores from "@/core/stores/UseStores";
import useFetchData from "@/hooks/useFetchData";
import { config } from "../../../../config";
import usePostData from "@/hooks/usePostData";

function NotificationSection(): React.ReactElement {
  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id
  const[show, setShow] = useState<any>()
  const[isNotifClicked, setIsNotifClicked] = useState(false)

  const handleTrigger = async (): Promise<void> => {
    setIsNotifClicked(true)
    usePostData(`${config.BACKEND_ENDPOINT}/api/notification/trigger/${businessId ?? ''}`)
    setIsNotifClicked(false)
  }

  const { data,  refetch } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/notification/hasnotification/${businessId ?? ''}`
  )
  useEffect(()=>{
    if (data === null) return
    setShow(data)
  },[data])

  useEffect(()=>{
    if(isNotifClicked) return
    refetch()
  },[isNotifClicked])

  return (
    <Popover content={<NotificationBar />} trigger={"click"}>
      <div onClick={()=> handleTrigger()}>
      <Badge dot={!show.hasView}>
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
