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
    const starsArray = Array.from({ length: 150 }, (_, index) => {
      const randomX = Math.random() * 100; // Random horizontal position
      const randomY = Math.random() * 100; // Random vertical position
      const randomSize = Math.random() * 3 + 1; // Random size between 1px and 4px
      const randomDuration = Math.random() * 20 + 10; // Random animation duration between 10s and 30s
      const randomOpacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

      const style = {
        position: 'absolute',
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        background: 'white',
        borderRadius: '50%',
        opacity: randomOpacity,
        boxShadow: `0 0 ${randomSize * 2}px rgba(255, 255, 255, 0.8)`,
        animation: `moveStars ${randomDuration}s linear infinite`,
      };

      return <div key={index} style={style} />;
    });

    return (
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          overflow: 'hidden',
          backgroundColor: 'black',
        }}
      >
        {starsArray}
      </div>
    );
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
