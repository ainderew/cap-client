/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import UploadButton from '../modal/buttonUpload'
import SpreadsheetModal from './ssmodal'
import { ExcelToString } from '@/utils/functions/inputToFile'

const UploadFile: React.FC = () => {
  const acceptableFileTypes = '.txt, .csv, .xls, ,xlsx'
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [hasFile, setHasFile] = useState<boolean>(false)
  const [ssString, setSsString] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (files.length !== 0) setHasFile(true)
  }, [files])

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      const files: any = Array.from(e.target.files)
      if (files.length > 0) {
        const filename = files[0].name || ''
        setTitle(filename.substring(0, filename.lastIndexOf('.')))
        const extension = filename.substring(filename.lastIndexOf('.'), filename.length)

        if (extension === '.txt') setFiles(files)
        else {
          const file = e.target.files[0]
          if (file) {
            const reader = new FileReader()
            if (extension === '.csv') {
              reader.onload = (e: any) => {
                const contents = e.target.result
                setSsString(contents)
                setOpenModal(true)
              }

              reader.readAsText(file)
            } else if (extension === '.xlsx' || extension === '.xls') {
              reader.onload = (e: any) => {
                const data = e.target.result as ArrayBuffer
                const excelData = ExcelToString(data)

                setSsString(excelData)
                setOpenModal(true)
              }

              reader.readAsArrayBuffer(file)
            }
          }
        }
      }
    }
  }

  const handleClick = (): void => {
    if (fileInputRef.current != null) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
    { !hasFile ? (
        <>
            <input
                type="file"
                accept={acceptableFileTypes}
                onChange={handleFileChange}
                className='hidden'
                multiple={false}
                ref={fileInputRef}
            />
            <Button onClick={handleClick} className='bg-blue-500 text-white'>
                Select File
            </Button>
        </>
    ) : (
            <UploadButton file={files} isDisabled={!hasFile} label='Upload File' primary={true}/>
    )
    }
        <div className='text-sm text-neutral-500 my-1'>
            {hasFile ? `${files[0].name.split('.').slice(0, -1).join('.')}` : `Allowed files: ${acceptableFileTypes}`}
        </div>
        <SpreadsheetModal content={ssString} title={title} open={openModal} setContent={setSsString} setOpen={setOpenModal}/>

    </>
  )
}

export default UploadFile
