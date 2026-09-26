import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='border-t border-[#E8E3DA] dark:border-[#33312E] bg-gradient-to-br from-[#F5F2EB] to-white dark:bg-gradient-to-br dark:from-[#1C1B1A] dark:to-[#141312] py-24 sm:py-28 min-h-[210px] flex items-center'>
      <div className='container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6'>
        
        <div>
          <h3 className='text-xl text-[#2C2A29] dark:text-[#EFECE6] font-bold'>
            Portfolio
          </h3>
          <p className='text-xs text-[#6B6760] dark:text-[#A39E93]'>Frontend Developer</p>
        </div>

        <div className='flex items-center gap-6'>
          <a
            href="https://github.com/jfoni"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[#2C2A29] dark:text-[#EFECE6] hover:text-[#6B705C] dark:hover:text-[#A3B18A] transition-colors'
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jannatul-ferdous-oni-358440435/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[#2C2A29] dark:text-[#EFECE6] hover:text-[#6B705C] dark:hover:text-[#A3B18A] transition-colors'
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <p className='text-xs text-[#6B6760] dark:text-[#A39E93]'>
          &copy; {currentYear} Made by <span className='font-semibold text-[#2C2A29] dark:text-[#EFECE6]'>
            Oni
          </span>
        </p>

      </div>
    </footer>
  )
}

export default Footer