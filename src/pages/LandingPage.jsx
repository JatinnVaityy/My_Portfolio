import React from 'react'
import wavinghand from "../assets/wavinghand.gif"
import snapchatavtar from "../assets/snapchatavtar.png"
import Container from '../components/Container'
import { TypeAnimation } from 'react-type-animation'
import myphoto from '../assets/myphoto.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


function LandingPage() {
    return (
        <>
            <Container>
                <section id="home" className='mt-[20%] flex flex-col-reverse  justify-center gap-2 md:flex-row md:mt-[10%]  '>
                    {/* left part  */}
                    <div className='flex flex-col justify-center gap-4 w-full md:w-[50%]' data-aos="fade-right">
                        <h1 className='flex items-center'>
                            <img src={wavinghand} alt="wavinghand" className='w-8' />
                            <p className=' text-xl md:text-2xl'>Hey!</p>
                        </h1>
                        <h1 className=' text-4xl md:text-6xl font-bold'>
                            I'm Jatin Vaity
                        </h1>
                        <h1 className='text-xl md:text-2xl '>
                            I am
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer.',
                                    2000,
                                    'IoT Enthusiast.',
                                    2000,
                                    'Problem Solver.',
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ color: "#22c55e", fontStyle: "bold", fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.5rem', lineHeight: "1rem", marginLeft: "10px", display: 'inline-block' }}
                            />
                        </h1>
                        <div className='flex gap-2'>
                            <a  
                                
                                href="https://github.com/JatinnVaityy"
                                target="_blank"   
                            >
                                <FaGithub className='size-6 text-button' />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jatin-vaity-8691bb286/"
                                target="_blank"
                            >
                                <FaLinkedin className='size-6 text-button' />
                            </a>
                            <a
                                href="https://leetcode.com/u/JatinVaity/"
                                target="_blank"
                            >
                                <SiLeetcode className="size-6 text-button" />
                            </a>

                        </div>
                        <p className=' w-full md:w-[70%] text-md text-justify text-gray-300'>
                        A Passionate Electronics and Telecommunication Engineering student with a strong passion for technology and innovation. Skilled in merging core electronics knowledge with modern software development to create impactful projects, ranging from IoT systems and smart automation to web and mobile applications. Adept at utilizing programming, hardware integration, and creative problem-solving to develop solutions that bridge the gap between hardware and software.
                        </p>

                        <a href="https://drive.google.com/file/d/14DBYFE-VNfBUYERRex5etMbgynYHytft/view?usp=drive_link" target="_blank">
                        <button className=' w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-button text-gray-900 font-bold md:font-semibold border-2 border-border '>
                            Resume
                        </button>
                        </a>


                    </div>

                    {/* right part */}
                    <div className='flex items-center justify-center my-4' data-aos="fade-left">
                    <img src={myphoto} alt="My Avatar" className='rounded-full w-[300px] md:w-[300px] aspect-square object-cover' />
                    </div>

                </section>
            </Container>
        </>
    )
}

export default LandingPage