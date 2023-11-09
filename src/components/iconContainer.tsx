import React, { type ReactNode } from 'react'

interface props {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}

const sizeStyle = {
  small: 'w-6 h-6',
  medium: 'w-9 h-9',
  large: 'w-12 h-12'

}

function IconContainer ({ children, size = 'medium' }: props): React.ReactElement {
  return (
    <div className={`${sizeStyle[size]} cursor-pointer flex items-center justify-center rounded-full bg-gray-200 p-2`}>
      {children}
    </div>
  )
}

export default IconContainer
