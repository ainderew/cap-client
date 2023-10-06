import React from 'react'
import Image from 'next/image'
const Home: React.FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex  w-9/12 flex-col gap-10'>
        <header className='flex w-full py-[8rem] justify-center flex-col items-center'>
          <section className='bg-gradient-to-r from-black to-[#23EBEB] bg-clip-text font-bold text-transparent'>
            BRAMK
          </section>
          <section className='flex  justify-center text-center text-[2.125rem] sm:text-[3.125rem] lg:text-[4.125rem] font-extrabold'>
            <div className='lg:w-9/12 w-[90%]'>
              Elevate your business with<span className='text-blue-500'> AI-powered </span> support.
            </div>
          </section>
          <section className=' group m-10 flex gap-5 text-sm'>

            <button className='flex rounded-md border hover:bg-blue-500 hover:text-white  border-blue-500 px-6 py-1 text-blue-500'>
              Start Chatting{' '}
              <div className='translate-x-0 transition-all group-hover:translate-x-1'>&#x279D;</div>
            </button>
          </section>
        </header>
        <article className='flex flex-col items-center gap-4 py-10 rounded-md bg-blue-400 p-8 text-center'>
          <div className='md:text-4xl text-3xl font-bold text-white'>
            Know more about <span className='text-blue-950'> BRAMK</span>
          </div>
          <div className='w-full md:w-9/12 text-center text-sm font-semibold text-white'>
            At MBARK, we&apos;re shaping the future of interaction by harnessing the power of
            artificial intelligence. Our passion and mission revolve around creating intelligent
            solutions that understand and respond to user queries in a way that redefines
            convenience and efficiency.
          </div>
        </article>
        <article className='grid gap-2'>
          <section className='grid md:items-center gap-2  md:grid-cols-2'>

              <div className='relative h-[20rem] xl:h-[30rem] w-full md:flex'>
                <Image src={'/landingPic1.svg'} fill alt='landingPic1' />
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
          <section className='grid md:grid-cols-2 md:items-center gap-'>
            <div className='order-last '>
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
            <div className='md:order-last order-first relative h-[20rem] xl:h-[30rem] w-full md:flex'>
                <Image src={'/landingPic1.svg'} fill alt='landingPic1' />
            </div>
          </section>
        </article>
      </div>
      <footer className='h-[20rem] mt-10 bg-[#23EBEB] w-full'></footer>
    </div>
  )
}

export default Home
