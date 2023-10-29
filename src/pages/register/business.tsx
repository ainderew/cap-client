import BusinessRegisterForm from '@/components/businessRegister/form'
import React from 'react'
import DefaultLayout from '../layouts/default'

const BusinessRegisterUI: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <div className='flex min-h-full font-poppins'>
          <div className='grid w-full overflow-x-hidden'>
            <div className=' ] flex items-center justify-center'>
              <div>
                <div className='mb-[1.5rem]'>
                  <div className='text-[3.5rem] font-[700] tracking-[.5rem]'>
                    WELCOME
                  </div>
                  <div className='font-[600] text-[1]'>
                    Enter your account details
                  </div>
                </div>
                <BusinessRegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BusinessRegisterUI
