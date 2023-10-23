import BusinessRegisterForm from '@/components/businessRegister/form'
import React from 'react'



const BusinessRegisterUI: React.FC = () => {

  return (
    <div>
      <div className='flex min-h-full font-poppins'>
        <div className='grid w-full overflow-x-hidden'>
          <div className=' flex items-center justify-center ]'>
            <div>
              <div className='mb-[1.5rem]'>
                <div className='text-[3.5rem] font-[700] tracking-[.5rem]'>WELCOME</div>
                <div className='text-[1] font-[600]'>Enter your account details</div>
              </div>
              <BusinessRegisterForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessRegisterUI
