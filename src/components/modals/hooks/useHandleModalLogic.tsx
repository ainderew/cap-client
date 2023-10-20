import useStores from "@/core/stores/UseStores";
import { useRef } from "react";

function useHandleModalLogic() {
  const modalRef = useRef<null | HTMLDivElement>(null);

  const {
    uiStore: { setShowModal, modalData },
  } = useStores();

  function closeModal(e: any, cancelButton:boolean = false) {
    
    if (modalRef.current?.contains(e.target) && !cancelButton) {
      return;
    }

    setShowModal(false);
  }

  return {
    closeModal,
    modalRef,
    modalData
  };
}


export default useHandleModalLogic;
