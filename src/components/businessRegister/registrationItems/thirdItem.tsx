import React from 'react'
import { BusinessInterface } from '../form'
import { OurFileRouter } from '@/service/uploadthing';
import { UploadDropzone } from '@uploadthing/react';
import { Button } from 'antd';

interface ThirdItemProps{
    business: BusinessInterface,
    setBusiness: React.Dispatch<React.SetStateAction<BusinessInterface>>,
    hasUploaded: boolean,
    setHasUploaded: React.Dispatch<React.SetStateAction<boolean>>,
}

const ThirdItem :React.FC<ThirdItemProps> = ({business, setBusiness, hasUploaded, setHasUploaded}) => {
    return (
        <>
            <UploadDropzone<OurFileRouter>
                endpoint="imageUploader"
                content={{
                    button({ ready }) {
                    if (ready) return <Button className=' w-full h-full bg-blue-400 text-white'>Upload Image</Button>
                
                    return "Getting ready...";
                    },
                    allowedContent({ ready, fileTypes, isUploading }) {
                    if (!ready) return "Checking what you allow";
                    if (isUploading) return "Uploading Image ...";
                    return `Allowed content: ${fileTypes.join(", ")}`;
                    },
                }}
                onClientUploadComplete={(res:any) => {
                    const {url} = res[0]
                    setBusiness({...business, photo: url})
                    setHasUploaded(true)
                }}
                onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
                }}
            />   
        </>
    )
}

export default ThirdItem
