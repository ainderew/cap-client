import React, { type ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  label: string
}
const Tooltip: React.FC<TooltipProps> = ({ children, label }): JSX.Element => {
  return (
    <div className='group h-auto w-auto'>
      <div className='absolute hidden translate-x-5 bg-gray-500 px-2 py-1 text-xs text-white group-hover:flex'>
        {label}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
