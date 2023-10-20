import React from 'react'
import Image from 'next/image'
import DefaultLayout from './layouts/default'
import NavBar from '@/components/navbar'
import Banner from '@/components/landingPage/banner'
const Home: React.FC = () => {
  const business = [
    'Personalized Data',
    'Personalized Service',
    'Business Analytics',
    ' Proactive Notifications',
  ]
  const customer = [
    'Personalized Data',
    'Personalized Service',
    'Business Analytics',
    ' Proactive Notifications',
  ]
  return (
    <DefaultLayout>
      <div className='flex w-full flex-col items-center'>
        <div className="bg-black w-full h-10 flex items-center justify-center">
          <span className="text-white text-center text-xs md:text-sm">We're currently building out more features. BRAMK is in Pre-alpha</span>
        </div>
        <Banner />
        <div className='flex w-full flex-col gap-10 py-16 lg:w-9/12'>
          <article className='flex flex-col items-center gap-4 rounded-md bg-blue-400 p-8 py-10 text-center'>
            <div className='text-3xl font-bold text-white md:text-4xl'>
              Know more about <span className='text-blue-950'> BRAMK</span>
            </div>
            <div className='w-full text-center text-sm font-semibold text-white md:w-9/12'>
              At MBARK, we&apos;re shaping the future of interaction by
              harnessing the power of artificial intelligence. Our passion and
              mission revolve around creating intelligent solutions that
              understand and respond to user queries in a way that redefines
              convenience and efficiency.
            </div>
          </article>
          <article className='w-80% grid gap-2 px-10'>
            <section className='grid gap-2 md:grid-cols-2  md:items-center'>
              <div className='relative h-[30rem] w-full md:flex md:h-[20rem] xl:h-[30rem]'>
                <Image src={'/landingPic1.svg'} fill alt='landingPic1' />
              </div>

              <div>
                <div className='text-2xl font-bold'>
                  <span className='text-blue-500'>CUSTOMER </span> CHAT
                </div>
                <div className='font-500 text-[.8rem] leading-6 tracking-wide md:text-[1rem]'>
                  <p>
                    Seamless customer chat with MBARK: Connect, inquire, and get
                    quick, personalized assistance. Goodbye long waits, hello
                    hassle-free service!
                  </p>
                  <ul className='pl-10' style={{ listStyleType: 'disc' }}>
                    {business.map((item, index) => (
                      <li className='md:py-2' key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className='grid gap-2 md:grid-cols-2 md:items-center'>
              <div className='order-last'>
                <div className=' w-9/12 text-2xl font-bold'>
                  <span className='text-blue-500'>BUSINESS </span> SALES AND
                  SIDE
                </div>
                <div className='font-500 text-[.8rem] leading-6 tracking-wide md:text-[1rem]'>
                  <p>
                    Revolutionize customer support with MBARK: Boost efficiency,
                    automate common queries, and deliver instant personalized
                    service to elevate your brand's customer experience!
                  </p>
                  <ul className='pl-10' style={{ listStyleType: 'disc' }}>
                    {business.map((item, index) => (
                      <li className='md:py-2' key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='relative order-first h-[30rem] w-full md:order-last md:flex md:h-[20rem] xl:h-[30rem]'>
                <Image src={'/landingPic2.svg'} fill alt='landingPic2' />
              </div>
            </section>
          </article>
        </div>
        <footer className='mt-10 h-[20rem] w-full bg-[#23EBEB]'></footer>
      </div>
    </DefaultLayout>
  )
}

export default Home
