import { Button, Input, Modal } from 'antd'
import React from 'react'
import FileUploadButton from '../modal/fileHandler'

interface SpreadsheetModalProps {
  content: string
  title: string
  open: boolean
  setContent: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpreadsheetModal: React.FC<SpreadsheetModalProps> = ({ content, title, open, setContent, setOpen }) => {
  const { TextArea } = Input
  const handleCancel = (): void => {
    setOpen(false)
  }
  return (
        <Modal
        width={800}
        open={open}
        onCancel={handleCancel}
        title={<div className='text-xl mx-2'>{title}</div>}
        className='p-4'
        centered
        footer={[
            <Button key='cancel' danger onClick={handleCancel}>
            Cancel
            </Button>,
            <FileUploadButton key='upload' title={title} inputText={content} isDisabled={false}/>
        ]}>
            <TextArea
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
                autoSize={{ minRows: 20, maxRows: 20 }}
            />
        </Modal>
  )
}

export default SpreadsheetModal
