import React,{useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Contact from './components/Contact';
import Intro from './components/Intro';
// import AddIcon from '@mui/icons-material/Add';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      console.log( isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className={`nav text-center d-flex justify-content-center p-2 ${isScrolled ? 'bg-light dark' : ''}`}>
      <ul className='d-flex text-center flex-row justify-content-evenly'>
        <li><a className={`${isScrolled ? 'text-black-50' : 'text-white'}`} href='#aboutme'>About Me</a></li>
        <li><a className={`${isScrolled ? 'text-black-50' : 'text-white'}`} href='#projects'>Projects</a></li>
        <h1><span className={`${isScrolled ? 'text-body-secondary' : ''}`} style={{bottom:'5px'}}>A</span><span className={`${isScrolled ? 'text-body-secondary' : ''}`} style={{top:'5px'}}>R</span></h1>
        <li><a className={`${isScrolled ? 'text-black-50' : 'text-white'}`} href='#skills'>Skills</a></li>
        <li><a className={`${isScrolled ? 'text-black-50' : 'text-white'}`} href='#contact'>Contact</a></li>
      </ul>
    </div>
    
    <Intro />

    <Projects />

    <AboutMe />

    <MySkills />
    
    <Contact />

    </>
  );
}

export default App;
