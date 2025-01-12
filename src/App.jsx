import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);

  // Function to generate stars
  const renderStars = () => {
    const starsArray = Array.from({ length: 200 }, (_, index) => {
      const randomX = Math.random() * 100; // Random horizontal position
      const randomY = Math.random() * 100; // Random vertical position
      const randomDuration = Math.random() * 10 + 5; // Random animation duration
      const style = {
        position: 'absolute',
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: '2px',
        height: '2px',
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
        animation: `moveStars ${randomDuration}s linear infinite`,
      };
      return <div key={index} style={style} />;
    });

    return <div style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: '-1', overflow: 'hidden', backgroundColor: 'black' }}>{starsArray}</div>;
  };

  return (
    <>
      <style>
        {`
        @keyframes moveStars {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100vh);
          }
        }
        `}
      </style>
      <Toaster />
      {renderStars()} 
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
