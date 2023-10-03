import React, { type ReactNode, createContext, useContext, useState } from 'react'

interface File {
  _id: string
  originalname: string
  status: boolean
  dateuploaded: string
  datelastused: string
}

interface FileContextType {
  files: File[]
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

const initialFiles: File[] = []

const FileContext = createContext<FileContextType | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const FileProvider: React.FC<ProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<File[]>(initialFiles)

  return (
    <div>
    <FileContext.Provider value={{ files, setFiles }}>
      {children}
    </FileContext.Provider>
    </div>
  )
}

export const useFileContext = (): FileContextType => {
  const context = useContext(FileContext)

  if (context == null) {
    throw new Error('useFileContext must be used within a FileProvider')
  }

  return context
}
