import React from 'react'
import Avatar from './avatar'

const LoadingResponse: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar />
      <div className="lds-ellipsis relative ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingResponse
