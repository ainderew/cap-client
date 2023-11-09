import React from 'react'
import PreviewChat from './chat'
import PreviewAiChat from './aiChat'
import { motion, useScroll, useTransform } from 'framer-motion'
import LoadingResponse from '@/components/loadingResponse'

function PreviewAppBody (): React.ReactElement {
  const { scrollY } = useScroll()
  const type = useTransform(scrollY, [1000, 1100], ['0', '100%'])
  const firstChat = useTransform(scrollY, [700, 800], [0, 1])
  const loading = useTransform(scrollY, [800, 900, 1100, 1100], [0, 1, 1, 0])
  const loadingY = useTransform(
    scrollY,
    [900, 1100, 1100],
    ['flex', 'flex', 'none']
  )
  const secondChat = useTransform(scrollY, [1100, 1200], [0, 1])
  const thirdChat = useTransform(scrollY, [1250, 1350], [0, 1])

  return (
    <div className='m-auto flex h-full w-full md:w-[90%] flex-col gap-8 py-8 px-2 md:p-12 xl:w-[70%]'>
      <motion.div
        style={{ opacity: firstChat, scale: firstChat }}
        className='self-end'
      >
        <PreviewChat content='Are there any supplier for varnished wood?' />
      </motion.div>

      <motion.div
        style={{ opacity: loading, scale: loading, display: loadingY }}
        className='self-start'
      >
        <LoadingResponse />
      </motion.div>
      <motion.div
        style={{ opacity: secondChat, scale: secondChat }}
        className='self-start'
      >
        <PreviewAiChat content='Sure these are options near your location' />
      </motion.div>

      <motion.div
        style={{ opacity: thirdChat, scale: thirdChat }}
        className='self-end'
      >
        <PreviewChat content='Do they offer additional services?' />
      </motion.div>

      <div className='mt-auto inline h-7 w-full rounded-xl bg-gray-100 px-4 py-1'>
        <div className='w-fit h-full'>
          <motion.div
            style={{ width: type }}
            className='relative overflow-hidden'
          >
            <span className='whitespace-nowrap text-sm'>
              Are there any supplier for varnished wood?
            </span>
            <div className='absolute right-0 top-0 h-full w-4 border-r-2 border-black cursor' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PreviewAppBody
