import React, { useRef } from 'react'

interface AccordionProps {
  name: string
  children: JSX.Element
}

const Accordion: React.FC<AccordionProps> = ({ name, children }) => {
  const symbolRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const clicked = (): void => {
    if (symbolRef.current != null && contentRef.current != null) {
      symbolRef.current.classList.toggle('rotate-180')
      contentRef.current.classList.toggle('translate-y-0')
      contentRef.current.classList.toggle('h-0')
    }
  }

  const contentClicked = (e: any): void => {
    e.stopPropagation()
  }
  return (
    <div
      className='mx-10 my-2 flex h-fit flex-col rounded-lg border border-neutral-400 text-left'
      onClick={clicked}
    >
      <div className='flex cursor-pointer px-4 py-2 font-bold'>
        <div ref={symbolRef} className='mr-3  transition-all'>
          &#x25BD;
        </div>
        {name}
      </div>
      <div
        className='w-full cursor-default overflow-hidden'
        onClick={e => {
          contentClicked(e)
        }}
      >
        <div ref={contentRef} className=' h-0  -translate-y-full transition-all'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
