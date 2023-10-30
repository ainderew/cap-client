import { uploadFiles } from '@/utils/uploadthing'
import { Button } from 'antd'
import React from 'react'
import useHandleUpload from '../hooks/useHandleUpload'
import useStores from '@/core/stores/UseStores'
import { UploadFileResponse } from 'uploadthing/client'
import InputTextToTextFile from '@/utils/functions/inputToFile'

interface ComponentProp{
    title: string
    inputText: string
    isDisabled: boolean
}

const FileUploadButton:React.FC<ComponentProp> = ({title, inputText, isDisabled}) => {
    const { sendFileData } = useHandleUpload()
    const { uiStore: { setIsUploadingFile } } = useStores()
    
    const fileUploadStart = async () => {
        setIsUploadingFile(true)
        const newFile = InputTextToTextFile(title, inputText)
        
        console.log(newFile)
        
        try {
            const res = await uploadFiles({
                    files: newFile,
                    endpoint: "text",
            });
            console.log(res) 
            if(res!==null){
                const data: UploadFileResponse = res[0]
                void sendFileData(data)
            }   
            setIsUploadingFile(false)
        } catch (error) {
            console.log(error)
            setIsUploadingFile(false)
        }
    };

    return (
        <Button onClick={fileUploadStart} disabled={isDisabled}>
            Confirm
        </Button>
    )
}

export default FileUploadButton

