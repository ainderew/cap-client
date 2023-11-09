import { type ResponseRoles } from '../enums'

export type Filter = Record<string, unknown>

export interface SimpleBusiness {
  name: string
  location: string
  url: string
  image: string
}

interface modalOptions {
  showSubmitButton?: boolean
  showCancelButton?: boolean
  showTitle?: boolean

}

export interface ModalData {
  componentName: string
  modalTitle?: string
  width?: string
  height?: string
  options?: modalOptions
  onSubmitFunction?: () => unknown
  onCancelFunction?: () => unknown

}

export interface ChatMessage {
  content: string
  role: ResponseRoles
}
