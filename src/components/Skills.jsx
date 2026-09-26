import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 90, color: '#484A36' },
    { name: 'CSS', percentage: 85, color: '#484A36' },
    { name: 'JavaScript', percentage: 70, color: '#484A36' },
    { name: 'React', percentage: 65, color: '#484A36' },
    { name: 'Tailwind CSS', percentage: 75, color: '#484A36' },
    { name: 'C', percentage: 80, color: '#484A36' },
    { name: 'C++', percentage: 75, color: '#484A36' },
    { name: 'Java', percentage: 75, color: '#484A36' },
    { name: 'Java Swing', percentage: 70, color: '#484A36' },
    { name: 'MySQL', percentage: 65, color: '#484A36' },
    { name: 'Git & GitHub', percentage: 75, color: '#484A36' },
    { name: 'Problem Solving', percentage: 70, color: '#484A36' },
  ]

  return (
    <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 w-80 h-80 bg-[#484A36]/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-[#484A36]/10 rounded-full blur-3xl' />
      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#484A36]/10 border border-[#484A36]/20 mb-5'>
            <span className='w-2 h-2 rounded-full bg-[#484A36] animate-pulse' />
            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
              Expertise
            </span>
          </div>
          
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                 My <span className='dark:text-white text-gray-900'>Skills</span>
              </h2>
          
          <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg'>
            Technologies and tools I have learned and worked with.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {skills.map((skill, index) => {
            const radius = 60
            const circumference = 2 * Math.PI * radius
            const offset = circumference - (skill.percentage / 100) * circumference
            const size = 150

            return (
              <div
                key={index}
                className='flex flex-col items-center p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg hover:border-[#484A36]/50 transition-all duration-300 group'
                data-aos='fade-up'
                data-aos-delay={index * 50}
              >
                <div className='relative' style={{ width: size, height: size }}>
                  <svg width={size} height={size} className='transform -rotate-90'>
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill='none'
                      stroke='#e5e7eb'
                      strokeWidth='10'
                      className='dark:stroke-gray-700'
                    />
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill='none'
                      stroke={skill.color}
                      strokeWidth='10'
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap='round'
                      className='transition-all duration-1000 ease-out'
                    />
                  </svg>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center'>
                      <span className='text-2xl sm:text-3xl font-bold dark:text-white text-gray-900'>
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className='mt-4 text-base font-medium text-center dark:text-gray-200 text-gray-900'>
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills