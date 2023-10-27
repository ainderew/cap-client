import { Carousel, Modal } from 'antd'
import React, { useState } from 'react'

interface FileModalProps{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FileModal:React.FC<FileModalProps> = ({open, setOpen}) => {
    
    const [confirmLoading, setConfirmLoading] = useState(false);

    
    
      const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        setOpen(false);
      };

    return (
        <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
          
        </Modal>
    )
}

export default FileModal
