import React from "react";
import Image from "next/image";
import DefaultLayout from "./layouts/default";
import NavBar from "@/components/navbar";
import Banner from "@/components/landingPage/banner";
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='flex w-full flex-col items-center'>
        <div className="bg-black w-full h-10 flex items-center justify-center">
          <span className="text-white text-sm">We're currently building out more features and BRAMK in Pre-alpha</span>
        </div>
        <Banner />
        <div className='flex w-9/12 flex-col gap-10 py-16'>
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
