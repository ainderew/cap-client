import React, { type ReactNode, createContext, useContext, useState, useEffect } from 'react'

interface File {
  _id: string
  originalname: string
  status: boolean
  dateuploaded: string
  datelastused: string
}

interface FileContextType {
  files: File[]
  isLoading: boolean
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialFiles: File[] = []

const FileContext = createContext<FileContextType | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const FileProvider: React.FC<ProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<File[]>(initialFiles)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <FileContext.Provider value={{ files, isLoading, setFiles, setIsLoading }}>
      {children}
    </FileContext.Provider>
  )
}

export const useFileContext = (): FileContextType => {
  const context = useContext(FileContext)

  if (context == null) {
    throw new Error('useFileContext must be used within a FileProvider')
  }

  return context
}
