import { SimpleBusiness } from '@/utils/types/base'
import { action, observable, makeObservable } from 'mobx'

export default class UiStore {
  isUploadingFile: boolean = false
  isActivatingFile: boolean = false
  modalData: SimpleBusiness|null = null

  constructor () {
    makeObservable(this, {
      modalData: observable,
      isUploadingFile: observable,
      isActivatingFile: observable,
      setIsUploadingFile: action,
      setIsActivatingFile:action,
      setModalData: action
    })
  }

  setIsUploadingFile = (newValue: any): void => {
    this.isUploadingFile = newValue
  }

  setIsActivatingFile = (newValue: any): void => {
    this.isActivatingFile = newValue
  }

  setModalData = (newValue: any): void => {
    this.modalData = newValue
  }
}
