import React from 'react'
import Image from 'next/image'
import Kevin from '../img/kevin_photo.jpg'

const About = () => {
  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                  <h2 className='py-4'>Who I am</h2>
                  <p className='py-2 text-gray-600'>
                      I am a fullstack developer with a strong emphasis in frontend developement.
                      I obtained my degeree, a B.S. in Computer Information Systems with an emphasis in Informantion Technology, in the Spring of 2022.
                      While in school I learned many different concepts and methods on how computers and networks function,
                      which is where I found my passion for developement. 
                  </p>
                  <p className='py-2 text-gray-600'>
                      I began my journey as a web developer while taking a course out of neccessity,
                      but I eneded up finding something I enjoyed a lot more. In the course of these last few years I have worked on
                      several different projects to refine my skills and provide value and assitance wherever I can.

                  </p>
                  <p href='/#projects' className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects!</p>
              </div>
              <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                  <Image className='rounded-xl' src={Kevin} alt='Its me, Kevin!' />
              </div>
          </div>
    </div>
  )
}

export default About