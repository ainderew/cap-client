import React from 'react'

const Home: React.FC = () => {
  return (
<<<<<<< HEAD
    <div classNa
    me='h-screen w-full'>
      <NavBar />
      test 4
=======
    <div className='flex h-screen w-full flex-col items-center'>
      <div className='flex w-9/12 flex-col gap-10'>
        <header className='flex w-full flex-col items-center'>
          <section className='bg-gradient-to-r from-black to-[#23EBEB] bg-clip-text font-bold text-transparent'>
            BRAMK
          </section>
          <section className='flex justify-center text-center text-5xl font-extrabold'>
            <div className='w-9/12'>
              Elevate your business with<span className='text-blue-500'> AI-powered </span> support.
            </div>
          </section>
          <section className=' group m-10 flex gap-5 text-sm'>
            <button className='rounded-md bg-blue-500 px-8 py-1 text-white'>SIGN IN</button>
            <button className='flex rounded-md border border-blue-500 px-6 py-1 text-blue-500'>
              Start Chatting{' '}
              <div className='translate-x-0 transition-all group-hover:translate-x-1'>&#x279D;</div>
            </button>
          </section>
        </header>
        <article className='flex flex-col items-center gap-4 rounded-md bg-blue-400 p-8 text-center'>
          <div className='text-3xl font-bold text-white'>
            Know more about <span className='text-blue-950'> BRAMK</span>
          </div>
          <div className='w-9/12 text-center text-sm font-semibold text-white'>
            At MBARK, we&apos;re shaping the future of interaction by harnessing the power of
            artificial intelligence. Our passion and mission revolve around creating intelligent
            solutions that understand and respond to user queries in a way that redefines
            convenience and efficiency.
          </div>
        </article>
        <article>
          <section className='grid xl:grid-cols-2'>
            <div className=''>Photo Here
            </div>
            <div>
              <div className='text-xl font-bold'>
                <span className='text-blue-500'>CUSTOMER </span> CHAT
              </div>
              <p>
                Experience seamless customer chat with MBARK! Connect, inquire and get quick,
                personalized assistance from your favorite brands. Say goodbye to long waits and
                hello to hassle-free customer service.
              </p>
            </div>
          </section>
          <section className='grid xl:grid-cols-2'>
            <div className='xl:col-start-2'>Test There are some changes here</div>
            <div>
              <div className=' w-9/12 text-xl font-bold'>
                <span className='text-blue-500'>BUSINESS </span> SALES AND SIDE
              </div>
              <p>
                MBARK: Transform Customer Support Instantly! Boost customer service efficiency with
                MBARK. Our chat platform automates responses to common queries, allowing your
                support team to tackle complex issues while delivering instant and personalized
                customer support. Elevate your brand&apos;s customer service game with MBARK!
              </p>
            </div>
          </section>
        </article>
      </div>
      <footer>Footer</footer>
>>>>>>> c67eb491ddb3c5afb3149d43da722eb214be8a30
    </div>
  )
}

export default Home
