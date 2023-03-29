import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
      <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                  <p className='uppercase text-sm tracking-widest text-gray-600'>Come build with me</p>
                  <h1 className='py-4 text-gray-700'>
                      Hey, I'm <span className='text-[#5651e5]'>Kevin</span>
                  </h1>
                  <h1 className='py-2 text-gray-700'>
                      A Frontend Web Developer
                  </h1>
                  <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                      Full Stack Developer with a strong emphasis in Frontend development with an in-depth knowledge of web development,
                      understanding the importance of having responsive web design, attention to detail and ensuring pixel perfect results.
                  </p>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <Link href={'https://www.linkedin.com/in/kevin-de-la-torre'}>
                            <FaLinkedinIn />
                          </Link>
                      </div>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <Link href={'https://github.com/sebtheedark'}>
                              <FaGithub />
                          </Link>
                      </div>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <AiOutlineMail />
                      </div>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonFill />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Main