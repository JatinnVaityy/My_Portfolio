import React from 'react'
import Container from '../components/Container'
import CodeArena from "../assets/CodeArena.png"
import RealTimeTracker from "../assets/RealTimeTracker.png"
function Projects() {
    return (
        <>
            <Container>

                <div id="projects" className='w-full flex flex-col items-center '>
                    <div className='w-full flex justify-center text-2xl font-thin my-4'>
                        <h1 className='text-4xl md:text-4xl font-bold text-button'>Projects</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="fade-right">
                        <div className='w-full md:w-[90%] flex flex-col-reverse items-center md:flex-row gap-10 py-6 px-4 my-4'>
                            <div className=' flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'> CodeArena</h1>
                                <div className='flex flex-wrap gap-4  text-gray-900'>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2 '>React.js</div>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2 '>Node.js</div>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2 '>Socket.io</div>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2'>TailwindCss</div>
                                </div>

                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'  >
                                    Collaborative Code Editor: Developed an interactive web application allowing users to write and execute code collaboratively in real-time.<br />
                                    Chat Feature: Implemented a chat feature to enable effective communication and collaboration among users on the platform.<br />
                                    Responsive & User-Friendly: Ensured the platform was responsive and optimized for various devices and screen sizes.<br />
                                    Real-time Collaboration: Integrated real-time functionalities using WebSocket or similar technologies to enable seamless collaboration.

                                </p>
                                <div className='flex w-full gap-4 '>
                                    <a href="https://code-arena-one.vercel.app/" target="_blank">
                                        <div className='text-sm  font-bold border-2 border-button px-2 py-2 md:px-6 md:py-2 hover:bg-button hover:text-gray-900'>Live Demo</div>
                                    </a>

                                    <a href="https://github.com/AkashDange03/CodeArena" target="_blank">
                                        <div className='text-sm  font-bold border-2 border-button px-2 py-2 md:px-6 md:py-2 hover:bg-button hover:text-gray-900'>Source Code</div>
                                    </a>
                                </div>
                            </div>
                            <img src={CodeArena} alt="" className='w-[100%] md:w-[600px]' data-aos="fade-left" />
                        </div>

                        <div className='w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4' data-aos="fade-right" >
                            <div className=' flex flex-col  gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'>Location Tracker</h1>
                                <div className='flex flex-wrap gap-4 text-black'>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2'>EJS</div>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2'>Node.js</div>
                                    <div className='text-sm font-bold bg-button px-4 md:px-6 py-2'>Socket.io</div>
                                    <div className='text-sm  font-bold bg-button px-4 md:px-6 py-2 '>Express.js</div>
                                </div>

                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'>
                                    Real-time Location Tracking: Collects live location data using the Geolocation API, with updates every 5 seconds.<br />
                                    WebSocket & Leaflet Integration: Uses WebSockets for real-time communication and Leaflet to display locations on an interactive map.<br />
                                    Multiple Users & Insights: Allows multiple users to share their locations, providing insights into how location tracking works in applications like food delivery services.
                                </p>
                                <div className='flex w-full gap-4 '>
                                    <a href="https://realtimetracker-g6rh.onrender.com/" target="_blank">
                                        <div className='text-sm font-bold border-2 border-button  px-2 py-2 md:px-6 md:py-2 hover:bg-button hover:text-gray-900'>Live Demo</div>
                                    </a>
                                    <a href="https://github.com/AkashDange03/RealTimeTracker" target="_blank">
                                        <div className='text-sm  font-bold border-2 border-button  px-2 py-2 md:px-6 md:py-2 hover:bg-button hover:text-gray-900'>Source Code</div>
                                    </a>
                                </div>
                            </div>
                            <img src={RealTimeTracker} alt="" className='w-[100%] md:w-[600px]' data-aos="fade-left" />
                        </div>

                        <a href="https://github.com/AkashDange03?tab=repositories">
                            <button className='bg-button text-gray-900 px-4 py-2'>
                                More
                            </button>
                        </a>

                    </div>
                </div>

            </Container>
        </>
    )
}

export default Projects