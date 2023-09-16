import React, { useState } from 'react'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <button onClick={handleClick} className='flex flex-col items-center justify-center'>
      <span
        className={`bg-steel-500 block h-0.5 w-6 rounded-sm 
                    transition-all duration-300 ease-out ${
                      isOpen ? '-translate-y-1 rotate-45 transform' : '-translate-y-0.5 transform'
                    }`}
      ></span>
      <span
        className={`bg-steel-500 my-0.5 block h-0.5 w-6 
                    rounded-sm transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`bg-steel-500 block h-0.5 w-6 rounded-sm 
                    transition-all duration-300 ease-out ${
                      isOpen ? 'translate-y-1 -rotate-45 transform' : 'translate-y-0.5 transform'
                    }`}
      ></span>
    </button>
  )
}

export default Nav
