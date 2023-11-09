/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-void */
import React from 'react'
import { useRouter } from 'next/router'

function BusinessOptions (): React.ReactElement {
  const router = useRouter()
  const { pathname } = router
  const currPath = pathname.split('/')[2]

  const options = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'data-management', label: 'Data Management' }
  ]

  return (
    <>
      {options.map((option) => (
        <button
        key={option.key}
          onClick={() => void router.replace(`/business/${option.key}`)}
          className={`${
            currPath === option.key ? 'text-primary' : null
          } h-full w-auto hover:text-primary`}
        >
          {option.label}
        </button>
      ))}
    </>
  )
}

export default BusinessOptions
