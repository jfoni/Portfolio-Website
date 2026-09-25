import React from 'react'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'
import { HiDownload, HiMail } from 'react-icons/hi'
import hero from '../assets/hero.png'
import CV from '../assets/CV.pdf'

const Hero = () => {
  const socialIcons = [
    { icon: FaLinkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/jannatul-ferdous-oni-358440435/' },
    { icon: FaGithub, alt: 'GitHub', link: 'https://github.com/jfoni' },
    { icon: SiCodeforces, alt: 'Codeforces', link: 'https://codeforces.com/profile/jannatuloni41' },
  ]

  return (
    <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>

          <div
            className='lg:w-2/5 w-full flex justify-center'
            data-aos='fade-right'
          >
            <div className='relative group'>
              <div className='absolute inset-0 bg-[#484A36] filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-full' />

              <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                <img
                  src={hero}
                  alt="hero"
                  className='w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 border-2 border-[#484A36]/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 pointer-events-none' />
                <div className='absolute inset-0 border-2 border-[#484A36]/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500 pointer-events-none' />
              </div>
            </div>
          </div>
          <div
            className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left'
            data-aos='fade-left'
          >
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#484A36]/10 border border-[#484A36]/20 mb-5'>
              <span className='w-2 h-2 rounded-full bg-[#484A36] animate-pulse' />
              <span className='text-sm font-medium dark:text-[#F4F1EC] text-[#484A36]'>
                Available for work
              </span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 dark:text-[#F4F1EC] text-[#484A36]'>
              Hi, I'm <span className='text-[#484A36] dark:text-[#F4F1EC]'>Oni</span>
            </h1>

            <h2 className='text-xl sm:text-2xl font-mono mb-4 dark:text-[#F4F1EC]/80 text-[#484A36]/80'>
              <span className='text-[#484A36]/50 dark:text-[#F4F1EC]/50'>&lt;</span>
              Frontend Developer | Software Developer
              <span className='text-[#484A36]/50 dark:text-[#F4F1EC]/50'>&gt;</span>
            </h2>


            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6'>
              <a href={CV} download className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white bg-[#484A36] hover:bg-[#484A36]/90 hover:shadow-[0_0_40px_rgba(72,74,54,0.4)] transition-all duration-300 transform hover:scale-105 font-semibold'>
                  <HiDownload size={18} />
                  Download CV
                </button>
              </a>

              <a href='#contact' className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-[#484A36] dark:border-[#484A36] dark:text-white text-[#484A36] font-semibold dark:hover:bg-[#484A36] hover:bg-[#484A36] hover:text-white dark:hover:text-white hover:shadow-[0_0_40px_rgba(72,74,54,0.3)] transition-all duration-300 transform hover:scale-105'>
                  <HiMail size={18} />
                  Hire Me
                </button>
              </a>
            </div>

            <div className='flex gap-4 mt-2'>
              {socialIcons.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={item.alt}
                    className='p-3 rounded-full bg-[#484A36]/10 dark:bg-[#F4F1EC]/10 text-[#484A36] dark:text-[#F4F1EC] hover:bg-[#484A36] hover:text-[#F4F1EC] dark:hover:bg-[#F4F1EC] dark:hover:text-[#484A36] transition-all duration-300'
                  >
                    <Icon className='text-xl' />
                  </a>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero