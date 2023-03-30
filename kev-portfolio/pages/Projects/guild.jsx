import React from 'react'
import Guild from '../../img/gg.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const guild = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' fill src={Guild} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Guild Gaming</h2>
          <h3></h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview: </h2>
          <p className='pt-2'>
            GuildGaming.gg is a gaming/social media startup, that is based out of Texas, that I currently contribute to. My current
            role as the UX/UI Lead is to ensure all our UI work is looking exactly like our wireframes and to ensure that everything
            connects and works correctly on the frontend. Our webapp is currently going through a massive redesign and I am currently
            leading the charge on that. 
          </p>
          <p className='pt-2'>
            Began as a frontend developer mainly working with React and Material-UI, but moved to a more Fullstack role with an 
            emphasis in frontend. We currently shifted from MUI and began our refresh with Tailwind. 
          </p>
          <Link href={'https://www.guildgaming.gg/'}>
            <button  className='px-8 py-2 mt-4 mr-8'>View Site</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies:</p>
            <div className='grid-cols-2 md:grid-cols-4'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />SQLAlchemy</p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default guild