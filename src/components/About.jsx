import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'
import aboutImg from '../assets/about.png'

const About = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jannatul-ferdous-oni-358440435/',
      color: 'hover:text-[#484A36] hover:border-[#484A36]/40 dark:hover:text-[#F4F1EC] dark:hover:border-[#F4F1EC]/40'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/jfoni',
      color: 'hover:text-[#484A36] hover:border-[#484A36]/40 dark:hover:text-[#F4F1EC] dark:hover:border-[#F4F1EC]/40'
    },
    {
      icon: SiCodeforces,
      label: 'Codeforces',
      link: 'https://codeforces.com/profile/jannatuloni41',
      color: 'hover:text-[#484A36] hover:border-[#484A36]/40 dark:hover:text-[#F4F1EC] dark:hover:border-[#F4F1EC]/40'
    },
  ]

  return (
    <section id='about' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>
        

        <div 
          className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left'
          data-aos='fade-right'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#484A36]/10 border border-[#484A36]/20 mb-4'>
            <span className='w-2 h-2 rounded-full bg-[#484A36] animate-pulse' />
            <span className='text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-[#F4F1EC] text-[#484A36]'>
              About Me
            </span>
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-[#F4F1EC] text-[#484A36] leading-tight'>
            Learning by Building <span className='text-[#484A36] dark:text-[#F4F1EC] block'></span>
          </h2>

          <p className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl'>
            I like learning by building and trying things out.
            I enjoy turning ideas into projects,
            figuring out how things work,
            and improving with every project I make.
            </p>

          <div className='flex gap-4 mb-8'>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  data-aos='zoom-in'
                  data-aos-delay={index * 100}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <IconComponent />
                </a>
              )
            })}
          </div>

          <a href='#contact' data-aos='fade-up' data-aos-delay='300'>
            <button className='group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-[#484A36] hover:bg-[#484A36]/90 hover:shadow-[0_0_40px_rgba(72,74,54,0.4)] transition-all duration-300 transform hover:scale-105'>
              Let's Talk
              <ArrowRight size={18} className='transform group-hover:translate-x-1 transition-transform duration-300' />
            </button>
          </a>

        </div>

        <div 
          className='relative order-1 lg:order-2 flex justify-center'
          data-aos='fade-left'
        >
          <div className='relative w-full max-w-sm sm:max-w-md'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#484A36]/40 to-[#484A36]/20 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse pointer-events-none' />
            <div className='absolute inset-0 bg-gradient-to-r from-[#484A36]/30 to-[#484A36]/20 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105 pointer-events-none' />

            <img 
              src={aboutImg} 
              alt="About" 
              className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-[#484A36]/30 backdrop-blur-sm'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About