import React from 'react'
import unitedImg from '../../img/united_app.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const vehicle = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' fill src={unitedImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Vehicle Inventory Mockup</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p> Project</p>
          <h2>Overview: </h2>
          <p className='pt-2'>
            The purpose of this project was to design and showcase a shift from using an outdated vehicle inventory system
            and possibly creating our own online based one. The code functions and allows the user to create and add various vehicles to its inventory
            and only saves them locally in the broswer. Once the page is refreshed, the page reverts to its original state and thus
            losing anything that was added. 
          </p>
          <p className='pt-4'>
            It was developed utilizing vanilla HTML, CSS and JavaScript and it is hosted on GitHub pages. No actual backend
            functionality was implemented as it was simply a project to practices skills and showcase what could be done.
          </p>
          <Link href={'https://sebtheedark.github.io/United-Web-App/'}>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href={'https://github.com/sebtheedark/United-Web-App'}>
            <button className='px-8 py-2 mt-4 mr-8'>Guithub</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies:</p>
            <div className='grid-cols-2 md:grid-cols-4'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript  </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Github Pages </p>
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

export default vehicle