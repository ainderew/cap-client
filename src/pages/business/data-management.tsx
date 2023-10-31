import FileGroup from "@/components/filegroup";
import UploadSection from "@/components/uploadSection/uploadsection";
import { FileProvider } from "@/core/upload/context";
import React from "react";
import DefaultLayout from "../layouts/default";
import useStores from "@/core/stores/UseStores";

const DataManagement: React.FC = () => {
  const {authStore:{userProfile}} = useStores()

  if(!userProfile?._id) return <>loading</>
  return (
    <DefaultLayout>
      <FileProvider>
        <div className='flex h-full w-full flex-col items-center'>
          <div className='w-8/12'>
            <UploadSection />
            <FileGroup />
          </div>
        </div>
      </FileProvider>
    </DefaultLayout>
  );
};

export default DataManagement;
