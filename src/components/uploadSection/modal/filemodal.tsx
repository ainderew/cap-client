import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import FileUploadButton from './fileHandler'
import ModalCarousel from './carousel'

interface FileModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DataProps {
  title: string
  inputText: string
}
export interface ContentProps {
  description: string
  prodserv: string
  policies: string
  other: string
}

const FileModal: React.FC<FileModalProps> = ({ open, setOpen }) => {
  const [data, setData] = useState<DataProps>({
    title: '',
    inputText: ''
  })

  const [content, setContent] = useState<ContentProps>(
    {
      description: '',
      prodserv: '',
      policies: '',
      other: ''
    }
  )

  const [disableSubmit, setDisableSubmit] = useState<boolean>(false)

  const handleCancel = (): void => {
    setOpen(false)
  }

  return (
        <Modal
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' danger onClick={handleCancel}>
            Cancel
          </Button>,
          <FileUploadButton key='upload' title={data.title} inputText={data.inputText} isDisabled={disableSubmit}/>
        ]}>
          <ModalCarousel setDisableSubmit={setDisableSubmit} content={content} data={data} setContent={setContent} setData={setData}/>
        </Modal>
  )
}

export default FileModal
