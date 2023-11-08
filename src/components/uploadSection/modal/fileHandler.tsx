
import React from 'react'

import {InputTextToTextFile} from '@/utils/functions/inputToFile'
import UploadButton from './buttonUpload'

interface ComponentProp{
    title: string
    inputText: string
    isDisabled: boolean
}

const FileUploadButton:React.FC<ComponentProp> = ({title, inputText, isDisabled}) => {
   

    const newFile = InputTextToTextFile(title, inputText)

    return (
        <UploadButton file={newFile} isDisabled={isDisabled} label='Confirm' primary={false}/>
    )
}

export default FileUploadButton

