/* eslint-disable @typescript-eslint/no-floating-promises */
import { Dropdown, message } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import MenuOptions from './common/menuOptions'
import UserAvatar from './common/avatar'
import NotificationSection from '../quickAccess/notifications'

function BusinessNavActions (): React.ReactElement {
  const router = useRouter()

  function handleClick (e: any): void {
    switch (e.key) {
      case 'logout':
        router.replace('/logout')
        break
      default:
        message.error('Something went wrong')
    }
  }

  const menuProps = {
    items: MenuOptions,
    onClick: handleClick
  }

  return (
    <div className='flex gap-3 items-center'>
      <NotificationSection />
      <Dropdown menu={menuProps} trigger={['click']}>
        {UserAvatar()}
      </Dropdown>
    </div>
  )
}

export default BusinessNavActions
