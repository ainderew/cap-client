import React from 'react'

const BusinessSignup: React.FC = () => {
  return (
    <div>
      <div className=''>
        <div className=''>
          <div className=''>
            <div>
              <div className=''>
                <div className=''>WELCOME</div>
                <div className=''>Sign up with us</div>
                <div className=''>Manage customer support with the help of AI</div>
              </div>
              <div className=''>
                <div className=''>Email</div>
                <input type='text' className=''></input>
              </div>
              <div className=''>
                <div className=''>Password</div>
                <input type='password' className=''></input>
              </div>
              <div className=''>
                <div className=''>Verify Password</div>
                <input type='password' className=''></input>
              </div>
              <div className=''>
                <div className=''>Business Name</div>
                <input type='text' className=''></input>
              </div>
              <div className=''>
                <div className=''>
                  <div className=''>Business Size</div>
                  <input type='text' className=''></input>
                </div>
                <div className=''>
                  <div className=''>Business Type</div>
                  <input type='text' className=''></input>
                </div>
              </div>

              <div className=''>
                <button className=''>Proceed</button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className=''>
              <img src='/images/bsignupvector.png' alt='vector' className='' />
            </div>
            <div className=''>
              <img src='/images/bsignupimage.png' alt='image' className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSignup
