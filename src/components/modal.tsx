import React from 'react'

interface props {
  show: boolean
  modalOpener: any
}
const Modal: React.FC<props> = ({ show, modalOpener }) => {
  const handleClose = (): void => {
    modalOpener(false)
  }
  return (
    <div
      className={`
    ${show ? 'absolute' : 'hidden'}
    absolute h-screen w-screen bg-[rgba(0,0,0,0.2)]`}
    >
      <div
        className={
          'absolute right-[50%] top-[50%] h-[90vh] w-[80vw] -translate-y-[50%] translate-x-[50%] bg-white shadow-2xl'
        }
      >
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 bg-white text-xl text-black"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
