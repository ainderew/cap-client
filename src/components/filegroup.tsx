import React, { useEffect, useState } from "react";
import FileInfo from "./fileinfo";
import { formatDate } from "@/utils/functions/dateformat";
import useStores from "@/core/stores/UseStores";
import { config } from "../../config";
import useFetchData from "@/hooks/useFetchData";
import { Empty, Spin } from "antd";
import { observer } from "mobx-react";

const FileGroup: React.FC = () => {
  const {
    authStore,
    uiStore: { isUploadingFile, isActivatingFile },
  } = useStores();
  const [files, setFiles] = useState<any>([]);
  const businessId = authStore.userProfile?._id;

  const { data, loading, refetch } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/file/getallfiles/${businessId ?? ""}`
  );

  useEffect(() => {
    if(!businessId) return 
    refetch();
  }, [authStore.userProfile?._id]);

  useEffect(() => {
    if (data === null) return;

    setFiles(data);
  }, [data]);

  useEffect(() => {
    if (isUploadingFile || isActivatingFile) return;

    refetch();
  }, [isUploadingFile, isActivatingFile]);

  if (loading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Spin />
      </div>
    );
  }

  if (data === null) {
    return (
      <div className=''>
        <Empty />
      </div>
    );
  }

  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[60%_25%_15%] rounded-md bg-blue-400 px-10 py-1 font-medium text-white'>
          <li className='flex items-center'>File Name</li>
          <li className='flex items-center'>Date Uploaded</li>
          <li className='flex items-center justify-center text-center'>
            Action
          </li>
        </ul>
        <div>
          {loading ? (
            <Spin />
          ) : (
            files
              .slice()
              .sort((a: any, b: any) => {
                if (a.status === b.status) {
                  const dateA = new Date(a.datelastused);
                  const dateB = new Date(b.datelastused);
                  return dateB.getTime() - dateA.getTime();
                }
                return a.status !== null ? -1 : 1;
              })
              .map((val: any, key: any) => (
                <div key={key}>
                  {businessId !== null && businessId !== undefined ? (
                    <FileInfo
                      key={key}
                      id={val._id}
                      businessid={businessId}
                      name={val.originalname}
                      dateuploaded={formatDate(val.dateuploaded)}
                      status={val.status}
                      lastused={formatDate(val.datelastused)}
                    />
                  ) : null}
                </div>
              ))
          )}
        </div>
      </section>
    </div>
  );
};

export default observer(FileGroup);
