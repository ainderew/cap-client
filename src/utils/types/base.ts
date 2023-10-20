import { ResponseRoles } from "../enums"

export type Filter = Record<string, unknown>



export type SimpleBusiness = {
  name: string,
  location: string,
  url: string,
  image: string
} 


type modalOptions = {
  showSubmitButton?: boolean,
  showCancelButton?: boolean,
  showTitle?: boolean,

}

export type ModalData = {
  componentName: string,
  modalTitle?: string,
  width?:string,
  height?:string,
  options?: modalOptions,
  onSubmitFunction?: () => unknown,
  onCancelFunction?: () => unknown,
  
}


export type ChatMessage ={
  content: string, 
  role: ResponseRoles
}