import React from 'react'
import playGames from '../../img/we_play_games.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const weplay = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' fill src={playGames} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>We Play Games</h2>
          <h3>HTML / CSS / JavaScript / Bootstrap</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p> Project</p>
          <h2>Overview: </h2>
          <p className='pt-2'>
            This was my first ever webdevelopment project and what truly introduced me to webdev. This was a group project
            and as a group we had to find a problem/issue that could be met/solved remotely. We came up with "We Play Games". 
            The purpose of the site was to allow for users to join and rank their favorite games (tabletop/board) and route
            them to a place to purchase them. 
          </p>
          <p className='pt-2'>
            Site was built utlizing vanilla HTML, CSS and JavaScript, but we also utilized Bootstrap for certain stylistic elements.
            Our site is also hosted using GitHub pages for easy viewing access.
          </p>
          <Link href={'https://sebtheedark.github.io/Games-Web/#game1'}>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href={'https://github.com/sebtheedark/Games-Web'}>
            <button className='px-8 py-2 mt-4 mr-8'>Github</button>          
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies:</p>
            <div className='grid-cols-2 md:grid-cols-4'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript  </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Bootstrap </p>
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

export default weplay