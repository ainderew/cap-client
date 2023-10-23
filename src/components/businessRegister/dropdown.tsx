import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import React, { useState } from 'react'
import { BusinessInterface } from './form'

interface BDropdownInterface{
    list: string[]
    defaultMessage : string
    business: BusinessInterface
    setBusiness: React.Dispatch<React.SetStateAction<BusinessInterface>>
}

const BusinessDropdown:React.FC<BDropdownInterface> = ({list, defaultMessage, business, setBusiness}) => {
    const [hasSelected, setHasSelected] = useState<boolean>(false);
    const [keySelected, setKeySelected] = useState<number>(0);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setKeySelected(parseInt(e.key))
        setBusiness({...business , size : list[parseInt(e.key)]})
        setHasSelected(true)
      };
      

    const items: MenuProps['items'] = 
    list.map((label, index) => ({
        label,
        key: index.toString(),
      }));

      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <div className='flex w-full'>
            <Dropdown menu={menuProps} trigger={['click']} className='hover:cursor-pointer'>
                <div className='rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF] w-full'>
                    <Space>
                            {hasSelected? (<div>
                                {list[keySelected]}
                            </div>)
                                : (
                                    <div className='text-neutral-500'>
                                        {defaultMessage}
                                    </div>
                                )}
                    </Space>
                </div>
            </Dropdown>
        </div>
    )
}

export default BusinessDropdown
