import { action, observable, makeObservable } from 'mobx'

export default class UiStore {
  isUploadingFile: boolean = false
  isActivatingFile: boolean = false

  constructor () {
    makeObservable(this, {
      isUploadingFile: observable,
      isActivatingFile: observable,
      setIsUploadingFile: action
    })
  }

  setIsUploadingFile = (newValue: any): void => {
    this.isUploadingFile = newValue
  }

  setIsActivatingFile = (newValue: any): void => {
    this.isActivatingFile = newValue
  }
}
