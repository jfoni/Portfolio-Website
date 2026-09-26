import React from 'react'
import { Send } from 'lucide-react'
import contactImg from '../assets/contact.png'

const Contact = () => {
  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                  Get In <span className='dark:text-white text-gray-900'>Touch</span>
              </h2>
          <p className='text-[#6B6760] dark:text-[#A39E93] max-w-md mx-auto'>
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          
          <form 
            action="https://formspree.io/f/maenpvyq" 
            method="POST"
            className='flex flex-col gap-5 bg-[#F5F2EB] dark:bg-[#1C1B1A]/80 p-8 sm:p-10 rounded-3xl border border-[#E8E3DA] dark:border-[#33312E] backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 shadow-xl'
            data-aos='fade-right'
          >
            <input 
              type='text'
              name='name'
              placeholder='Name'
              className='w-full px-5 py-4 rounded-xl border outline-none text-base transition-all border-[#E8E3DA] dark:border-[#33312E] bg-white dark:bg-[#141312] text-[#2C2A29] dark:text-[#EFECE6] placeholder:text-[#8C867D] focus:border-[#6B705C] dark:focus:border-[#A3B18A]'
              required
            />

            <input 
              type='email'
              name='email'
              placeholder='Email'
              className='w-full px-5 py-4 rounded-xl border outline-none text-base transition-all border-[#E8E3DA] dark:border-[#33312E] bg-white dark:bg-[#141312] text-[#2C2A29] dark:text-[#EFECE6] placeholder:text-[#8C867D] focus:border-[#6B705C] dark:focus:border-[#A3B18A]'
              required
            />

            <textarea 
              name='message'
              rows='5'
              placeholder='Message'
              className='w-full px-5 py-4 rounded-xl border outline-none text-base transition-all border-[#E8E3DA] dark:border-[#33312E] bg-white dark:bg-[#141312] text-[#2C2A29] dark:text-[#EFECE6] placeholder:text-[#8C867D] focus:border-[#6B705C] dark:focus:border-[#A3B18A] resize-none'
              required
            />

            <button
              type='submit'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-[#6B705C] hover:bg-[#585D4D] dark:bg-[#585D4D] dark:hover:bg-[#4A4E40] active:scale-98 transition-all cursor-pointer w-full sm:w-fit shadow-md shadow-[#6B705C]/20'
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className='flex justify-center w-full relative order-1 lg:order-2' data-aos='fade-left'>
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
              <div className='w-75 h-90 rounded-full bg-[#6B705C]/40 dark:bg-[#3A4032]/60 blur-3xl scale-110'></div>
            </div>
            <img 
              src={contactImg} 
              alt="Contact" 
              className='w-96 h-110 object-cover rounded-3xl relative z-10 shadow-2xl'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact