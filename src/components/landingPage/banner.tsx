import React from 'react'
import { useRouter } from 'next/router'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProductPreview from './productPreview'
import LeftHighlight from './highlight/left'
import Image from 'next/image'

function Banner (): React.ReactElement {
  const router = useRouter()
  const { scrollY } = useScroll()

  const productXAnimtation = useTransform(
    scrollY,
    [300, 800, 1500, 1800],
    [-900, 0, 0, 2000]
  )

  const opacity = useTransform(scrollY, [1200, 1400, 1700], [1, 1, 0])
  const productScale = useTransform(
    scrollY,
    [300, 800, 1500, 1800],
    [0, 1, 1, 0]
  )

  const y2 = useTransform(scrollY, [1400, 2400], [50, -400])
  return (
    <div className='section-1 flex w-full flex-col items-center justify-center'>
      <section className='flex h-screen w-full flex-col items-center justify-center gap-8 px-4 lg:px-0 py-8'>
        <span className='self-start font-semibold text-white md:self-center'>
          BRAMK
        </span>
        <h2 className='text-left text-5xl font-semibold text-white sm:text-[3.125rem] md:text-center lg:text-[4.125rem] xl:text-6xl'>
          Elevate your business with <br />
          <span className='text-blue-500'>AI-powered </span> support.
        </h2>

        <span className='text-justify md:text-center'>
          The first software designed to accommodate your entire business
          process under one solution,
          <br className='hidden md:block' /> making it easy to use and easy to
          run. It allows you to incorporate all your employees
          <br className='hidden md:block' /> and contractors, track expenses,
          and provide real-time project profitability
        </span>
        <div className='group flex gap-5 text-sm'>
          <button
            onClick={async () => await router.push('/home')}
            className='flex rounded-md border-2 border-white px-6  py-1 text-white hover:border-blue-500 hover:bg-blue-500'
          >
            Start Chatting{' '}
            <div className='translate-x-0 transition-all group-hover:translate-x-1'>
              &#x279D;
            </div>
          </button>
        </div>

        <div className='hovering-mascot h-[30vh] w-full lg:h-96 lg:w-96 relative'>
          <Image src={'mascot.svg'} fill alt='bramk' />
        </div>
      </section>

      <div className='relative flex w-full flex-col items-center lg:h-[300vh] xl:h-[250vh]'>
        <div className='animation_fix sticky top-0 h-[250vh] w-full overflow-hidden md:block md:h-[140vh] xl:h-[200vh]'>
          <motion.div
            key={'setuplayout_motion'}
            style={{ scale: productScale, opacity, x: productXAnimtation }}
            transition={{
              // x: { type: "spring", stiffness: 100 },
              stiffness: 0,
              duration: 0.8,
              delay: 0
            }}
            className='sticky top-7 flex w-full items-center justify-center'
          >
            <ProductPreview />
          </motion.div>
        </div>

        <div className='grid w-[90%] grid-cols-1 items-center justify-center text-gray-900 md:h-[150vh] md:w-[90%] md:grid-cols-[50%_1fr] xl:h-screen xl:w-9/12 xl:grid-cols-[40%_1fr]'>
          <motion.div
            style={{ y: y2 }}
            className='flex h-1/2 w-full flex-col justify-end gap-8 text-center md:text-left'
          >
            <LeftHighlight />
          </motion.div>

          <div className='flex h-full w-full items-center justify-start bg-highlightRight bg-cover bg-no-repeat px-12 md:h-1/2 md:bg-contain'>
            <motion.div
              key={'setuplayout_motion2'}
              style={{ y: y2 }}
              className='h-80 w-80 bg-highlightLeft bg-cover bg-no-repeat'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
