import Image from 'next/image'
import React from 'react'
import unitedImg from '../img/united_app.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import playGames from '../img/we_play_games.png'
import Guild from '../img/gg.png'

const Projects = () => {
  return (
      <div id='projects' className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>

              <h2 className='py-4'>What I'm working on:</h2>
              <div className='grid md:grid-cols-2 gap-8'>
                  <ProjectItem title='Guild Gaming'
                      backgroundImg={Guild}
                      techStack='REACT TAILWIND PYTHON SQLALCHEMY'
                      projectUrl='/theguild'
                  />
                  {/* <ProjectItem title='Watch Co.'
                      backgroundImg={playGames}
                      techStack='HTML CSS JS BOOTSTRAP'
                      projectUrl='/watches'
                  /> */}
              </div>
              <br />
              <br />
              <br />
              <h2 className='py-4'>What I've built:</h2>
              <div className='grid md:grid-cols-2 gap-8'>
                  <ProjectItem title='Vehicle Inventory'
                      backgroundImg={unitedImg}
                      techStack='HTML CSS JS'
                      projectUrl='/vehicle'
                  />
                  <ProjectItem title='Games'
                      backgroundImg={playGames}
                      techStack='HTML CSS JS BOOTSTRAP'
                      projectUrl='/games'
                  />
              </div>
          </div>
    </div>
  )
}

export default Projects