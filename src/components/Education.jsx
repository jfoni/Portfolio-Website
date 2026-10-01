import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <section 
      id="education" 
      className="py-24 bg-transparent"
    >
      <div className="container mx-auto px-6">
        
        <div 
          className="text-center mb-16 pt-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-[#2C2A29] dark:text-[#F4F1EC] tracking-tight">Education</h2>
          <p className="text-base text-[#6B6760] dark:text-[#A39E93] mt-3 max-w-md mx-auto">
            My academic background
          </p>
        </div>

        <div 
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="group relative bg-white dark:bg-[#141312]/60 backdrop-blur-lg p-10 rounded-3xl border border-[#E8E3DA] dark:border-[#484A36] shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#6B705C]/30 dark:hover:border-[#A3B18A]/30 hover:shadow-3xl overflow-hidden">
            
            <div className="absolute -inset-px bg-gradient-to-r from-[#6B705C]/0 dark:from-[#A3B18A]/0 via-[#6B705C]/10 dark:via-[#A3B18A]/10 to-[#6B705C]/0 dark:to-[#A3B18A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

            <div className="relative flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 p-5 bg-[#6B705C]/10 dark:bg-[#A3B18A]/10 text-[#6B705C] dark:text-[#A3B18A] rounded-2xl border border-[#6B705C]/20 dark:border-[#A3B18A]/20 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap size={36} />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 mb-2">
                  <h3 className="text-2xl font-semibold text-[#2C2A29] dark:text-[#F4F1EC] leading-tight">
                    Bachelor of Science in Computer Science & Engineering
                  </h3>
                  <span className="text-sm font-medium px-4 py-1.5 bg-[#6B705C]/10 dark:bg-[#A3B18A]/10 text-[#6B705C] dark:text-[#A3B18A] rounded-full w-fit whitespace-nowrap border border-[#6B705C]/20 dark:border-[#A3B18A]/20 group-hover:bg-[#6B705C]/20 dark:group-hover:bg-[#A3B18A]/20 transition-colors duration-300">
                    2024 – Present
                  </span>
                </div>
                
                <p className="text-base font-medium text-[#6B6760] dark:text-[#A39E93]">
                  Metropolitan University, Sylhet, Bangladesh
                </p>
              </div>
            </div>

            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-[#6B705C]/5 dark:bg-[#A3B18A]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education