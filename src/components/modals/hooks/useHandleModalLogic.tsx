/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useStores from '@/core/stores/UseStores'
import { type ModalData } from '@/utils/types/base'
import { type MutableRefObject, useRef } from 'react'

interface returnType {
  closeModal: (e: any, cancelButton?: boolean) => void
  modalRef: MutableRefObject<HTMLDivElement | null>
  modalData: ModalData | null
}

function useHandleModalLogic (): returnType {
  const modalRef = useRef<null | HTMLDivElement>(null)

  const {
    uiStore: { setShowModal, modalData }
  } = useStores()

  function closeModal (e: any, cancelButton: boolean = false): void {
    if (modalRef.current?.contains(e.target) && !cancelButton) {
      return
    }

    setShowModal(false)
  }

  return {
    closeModal,
    modalRef,
    modalData
  }
}

export default useHandleModalLogic
