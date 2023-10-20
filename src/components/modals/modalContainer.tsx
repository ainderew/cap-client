import React from "react";
import { observer } from "mobx-react";
import useHandleModalLogic from "./hooks/useHandleModalLogic";
import { Button } from "antd";
import { ModalDictionary } from "./modalDictionary";

function ModalContainer(): React.ReactElement {
  const { closeModal, modalRef, modalData } = useHandleModalLogic();

  if (!modalData) return <></>;

  const {
    componentName,
    modalTitle,
    onCancelFunction,
    onSubmitFunction,
    options,
    height,
    width,
  } = modalData;

  return (
    <div
      onClick={(e) => closeModal(e)}
      className='fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-[rgba(120,_120,_120,_0.5)]'
    >
      <div
        ref={modalRef}
        className={`w-[${width ?? "700px"}] 
        !h-[${height ?? "800px"}] relative flex flex-col rounded-lg`}
      >
        {modalTitle || options?.showTitle ? (
          <div className='border-b-[1px] px-4 py-2'>modalTitle</div>
        ) : null}

        {React.createElement(ModalDictionary[componentName])}

        {options?.showCancelButton === false &&
        options?.showSubmitButton === false ? null : (
          <div className='flex justify-end gap-4 px-4 py-2'>
            {options?.showCancelButton === false ? null : (
              <Button
                onClick={
                  onCancelFunction
                    ? onCancelFunction
                    : (e) => closeModal(e, true)
                }
                className=''
              >
                Cancel
              </Button>
            )}
            {options?.showSubmitButton === false ? null : (
              <Button
                onClick={onSubmitFunction}
                className='bg-green-400 text-white hover:!border-green-400 hover:!text-white'
              >
                Submit
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(ModalContainer);
