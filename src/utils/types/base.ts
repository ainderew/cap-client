import { type ResponseRoles } from '../enums'

export type Filter = Record<string, unknown>

export interface SimpleBusiness {
  businessId: string
  industry: string
  name: string
  size: string
  location: {
    cityOrMunicipality: string
    country: string
    province: string
    specifics: string
  }
  url: string
  photo: any
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
