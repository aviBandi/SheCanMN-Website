import React from 'react'
import Button from '../components/Button'
import sheCan from '../images/sheCan.jpeg';
const Hero = () => {

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white text-purple-700 xl:whitespace-nowrap relative z-10 pr-10'>
            SheCan
          </span>
          <br />
          <span className=' inline-block mt-3'>MN Chapter</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Launchpad for her career in tech!
        </p>
        <a href='#about'>
        <Button label='About Us' />
        </a>

      </div>

     
      
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={sheCan}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
      </div>
      
    </section>
  )
}

export default Hero;
