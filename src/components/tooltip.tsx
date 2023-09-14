import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
}
function Tooltip ({ children, label }: Props): JSX.Element {
  return <div className='w-auto h-auto group'>
    <div className="absolute hidden bg-gray-500 text-white px-2 py-1 text-xs group-hover:flex">{label}</div>
    {children}
  </div>
}

export default Tooltip
