import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic';
// import profileCharacter from "../../../public/character.png"
// import LottieAnimation from './LottieAnimation'

const DynamicLottieAnimation = dynamic(() => import('@/src/components/About/LottieAnimation'), { ssr: false });

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
          <DynamicLottieAnimation/>
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            Welcome to Daytech, your go-to destination for the latest in the ever-evolving world of technology. At Daytech, we are passionate about exploring the cutting-edge innovations, trends, and breakthroughs that shape our digital landscape. With a dedicated team of tech enthusiasts, our mission is to demystify complex concepts, inspire curiosity, and empower our readers to navigate the digital realm with confidence.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection