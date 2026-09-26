import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero' 
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
  }

 return (
  <div className={
    darkMode
      ? `bg-gradient-to-br from-[#1F2118] via-[#2A2C21] to-[#484A36] text-[#F4F1EC] min-h-screen`
      : `bg-[#F4F1EC] text-[#484A36] min-h-screen`
  }>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Hero />
    <About />
    <Skills />
    <Projects />
  </div>
)
}

export default App