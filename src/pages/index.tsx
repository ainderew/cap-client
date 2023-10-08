import React from "react";
import Image from "next/image";
import DefaultLayout from "./layouts/default";
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='flex w-full flex-col items-center'>
        <div className='flex  w-9/12 flex-col gap-10'>
          <header className='flex w-full flex-col items-center justify-center py-[8rem]'>
            <section className='bg-gradient-to-r from-black to-[#23EBEB] bg-clip-text font-bold text-transparent'>
              BRAMK
            </section>
            <section className='flex  justify-center text-center text-[2.125rem] font-extrabold sm:text-[3.125rem] lg:text-[4.125rem]'>
              <div className='w-[90%] lg:w-9/12'>
                Elevate your business with
                <span className='text-blue-500'> AI-powered </span> support.
              </div>
            </section>
            <section className=' group m-10 flex gap-5 text-sm'>
              <button className='flex rounded-md border border-blue-500 px-6  py-1 text-blue-500 hover:bg-blue-500 hover:text-white'>
                Start Chatting{" "}
                <div className='translate-x-0 transition-all group-hover:translate-x-1'>
                  &#x279D;
                </div>
              </button>
            </section>
          </header>
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
          <article className='grid gap-2'>
            <section className='grid gap-2 md:grid-cols-2  md:items-center'>
              <div className='relative h-[20rem] w-full md:flex xl:h-[30rem]'>
                <Image src={"/landingPic1.svg"} fill alt='landingPic1' />
              </div>

              <div>
                <div className='text-xl font-bold'>
                  <span className='text-blue-500'>CUSTOMER </span> CHAT
                </div>
                <p>
                  Experience seamless customer chat with MBARK! Connect, inquire
                  and get quick, personalized assistance from your favorite
                  brands. Say goodbye to long waits and hello to hassle-free
                  customer service.
                </p>
              </div>
            </section>
            <section className='gap- grid md:grid-cols-2 md:items-center'>
              <div className='order-last '>
                <div className=' w-9/12 text-xl font-bold'>
                  <span className='text-blue-500'>BUSINESS </span> SALES AND
                  SIDE
                </div>
                <p>
                  MBARK: Transform Customer Support Instantly! Boost customer
                  service efficiency with MBARK. Our chat platform automates
                  responses to common queries, allowing your support team to
                  tackle complex issues while delivering instant and
                  personalized customer support. Elevate your brand&apos;s
                  customer service game with MBARK!
                </p>
              </div>
              <div className='relative order-first h-[20rem] w-full md:order-last md:flex xl:h-[30rem]'>
                <Image src={"/landingPic1.svg"} fill alt='landingPic1' />
              </div>
            </section>
          </article>
        </div>
        <footer className='mt-10 h-[20rem] w-full bg-[#23EBEB]'></footer>
      </div>
    </DefaultLayout>
  );
};

export default Home;
