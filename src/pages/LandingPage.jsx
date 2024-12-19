import React from 'react'
import wavinghand from "../assets/wavinghand.gif"
import snapchatavtar from "../assets/snapchatavtar.png"
import Container from '../components/Container'
import { TypeAnimation } from 'react-type-animation'
import AkashPic from "../assets/AkashPhoto.jpeg"
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
                            I'm Akash Dange
                        </h1>
                        <h1 className='text-xl md:text-2xl '>
                            I am
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer.',
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
                                
                                href="https://github.com/AkashDange03"
                                target="_blank"   
                            >
                                <FaGithub className='size-6 text-button' />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/akash-dange-98a699243"
                                target="_blank"
                            >
                                <FaLinkedin className='size-6 text-button' />
                            </a>
                            <a
                                href="https://leetcode.com/u/akashdange/"
                                target="_blank"
                            >
                                <SiLeetcode className="size-6 text-button" />
                            </a>

                        </div>
                        <p className=' w-full md:w-[70%] text-md text-justify text-gray-300'>
                            I am currently pursuing a BE degree in Computer Engineering at Terna Engineering College.
                            I have also completed Diploma in Information Technology from Government Polytechnic Thane. My knowledge base includes proficiency in HTML, CSS, C, C++, MySQL, Java, and Python. I am currently working towards becoming a proficient web developer.
                        </p>

                        <a href="https://drive.google.com/file/d/1aeQ8v18jTYsoSXg3u2R5pOXxgzbT-8cn/view?usp=sharing" target="_blank">
                        <button className=' w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-button text-gray-900 font-bold md:font-semibold border-2 border-border '>
                            Resume
                        </button>
                        </a>


                    </div>

                    {/* right part */}
                    <div className='flex items-center justify-center my-4' data-aos="fade-left">
                        <img src={AkashPic} alt="avtar" className='rounded-full  w-[200px] md:w-[300px]' />
                    </div>

                </section>
            </Container>
        </>
    )
}

export default LandingPage