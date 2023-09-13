import React from 'react'

interface FileInfoProps {
  name: string
  lastmodified: string
  createdby: string
  status: boolean
}

const FileInfo: React.FC<FileInfoProps> = ({ name, lastmodified, createdby, status }) => {
  return <div></div>
}

export default FileInfo
