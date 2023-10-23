import { uploadFiles } from '@/utils/uploadthing'
import { Button } from 'antd'
import React from 'react'
import useHandleUpload from './hooks/useHandleUpload'
import useStores from '@/core/stores/UseStores'
import { UploadFileResponse } from 'uploadthing/client'
import InputTextToTextFile from '@/utils/functions/inputToFile'

interface ComponentProp{
    title: string
    inputText: string
}

const FileUploadButton:React.FC<ComponentProp> = ({title, inputText}) => {
    const { sendFileData } = useHandleUpload()
    const { uiStore: { setIsUploadingFile } } = useStores()
    
    const fileUploadStart = async () => {
        setIsUploadingFile(true)
        try {
            const newFile = InputTextToTextFile(title, inputText)

            const res = await uploadFiles({
                    files: newFile,
                    endpoint: "text",
            });
            
            if (res != null) {
                const data: UploadFileResponse = res[0]
                void sendFileData(data)
            }

        } catch (error) {
            console.log(error)
        }
        setIsUploadingFile(false)
    };

    return (
        <Button onClick={fileUploadStart}>
            Confirm
        </Button>
    )
}

export default FileUploadButton

