import { action, observable, makeObservable } from 'mobx'

export default class UiStore {
  isUploadingFile: boolean = false

  constructor () {
    makeObservable(this, {
      isUploadingFile: observable,
      setIsUploadingFile: action
    })
  }

  setIsUploadingFile = (newValue: any): void => {
    this.isUploadingFile = newValue
  }
}
