import React from "react";
import { useRouter } from "next/router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ProductPreview from "./productPreview";
import LeftHighlight from "./highlight/left";

function Banner(): React.ReactElement {
  const router = useRouter();
  const { scrollY } = useScroll();

  const productXAnimtation = useTransform(
    scrollY,
    [0, 500, 800, 1400],
    [-900, 0, 0, 2000]
  );
  const opacity = useTransform(scrollY, [700, 1400], [1, 0]);
  const productScale = useTransform(scrollY, [-200, 200], [0, 1]);

  const y2 = useTransform(scrollY, [1400, 2400], [0, -400]);
  const y3 = useTransform(scrollY, [1400, 2200], [300, 100]);
  return (
    <div className='section-1 flex w-full flex-col items-center justify-center'>
      <section className='flex h-[50vh] w-full flex-col items-center justify-center gap-8'>
        <span className='font-semibold text-white'>BRAMK</span>
        <h2 className='text-center text-[2.125rem] font-semibold text-white sm:text-[3.125rem] lg:text-[4.125rem] xl:text-6xl'>
          Elevate your business with <br />
          <span className='text-blue-500'>AI-powered </span> support.
        </h2>

        <span className='text-center'>
          The first software designed to accommodate your entire business
          process under one solution,
          <br /> making it easy to use and easy to run. It allows you to
          incorporate all your employees
          <br /> and contractors, track expenses, and provide real-time project
          profitability
        </span>

        <div className='group flex gap-5 text-sm'>
          <button
            onClick={() => router.push("/home")}
            className='flex rounded-md border-2 border-white px-6  py-1 text-white hover:border-blue-500 hover:bg-blue-500'
          >
            Start Chatting{" "}
            <div className='translate-x-0 transition-all group-hover:translate-x-1'>
              &#x279D;
            </div>
          </button>
        </div>
      </section>

      <div className='relative flex h-[250vh] w-full flex-col items-center '>
        <div className='animation_fix sticky top-10 w-full overflow-hidden xl:top-0'>
          <motion.div
            style={{ scale: productScale, x: productXAnimtation }}
            className='sticky top-10 flex w-full items-center justify-center'
          >
            <ProductPreview />
          </motion.div>
        </div>

        <div className='grid grid-cols-[40%_1fr] items-center justify-center text-gray-900 md:h-[200vh] md:w-[90%] xl:h-screen xl:w-9/12'>
          <motion.div
            style={{ y: y2 }}
            className='flex h-1/2 w-full flex-col justify-end gap-4'
          >
            <LeftHighlight />
          </motion.div>

          <div className='right-highlight flex h-1/2 w-full items-center px-12 justify-start'>
            <motion.div style={{ y: y2 }} className='right-element h-80 w-80' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
