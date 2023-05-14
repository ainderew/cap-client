import React from 'react'

const CustomerSignup: React.FC = () => {
  const clicked = (): void => {
    // some functions here when proceed is clicked
  }
  return (
    <div>
      <div className='font-poppins flex h-[100vh]'>
        <div className='grid w-full grid-cols-[50%_50%] overflow-x-hidden'>
          <div className='m-[5rem] flex items-center justify-center'>
            <div>
              <div className='mb-[1.5rem]'>
                <div className='text-[3.5rem] font-[700] tracking-[.5rem]'>WELCOME</div>
                <div className='text-[2.25rem] font-[600] tracking-[.45rem]'>Sign up with us</div>
                <div className='font-[600] tracking-[.1rem]'>
                  Manage customer support with the help of AI
                </div>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Email</div>
                <input
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Password</div>
                <input
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Verify Password</div>
                <input
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='mt-[3rem] font-[600]'>
                <button
                  onClick={clicked}
                  className='w-[10rem] rounded-[.3rem] bg-[#D9D9D9] px-[1.5rem] py-[.3rem] text-[.8rem] font-[600]'
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className=''>{/* <Image src={''} width={} height={} alt='' /> */}</div>
            <div className=''>{/* <Image src={''} width={} height={} alt='' /> */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSignup
