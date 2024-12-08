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
                        <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-full md:w-[90%] flex flex-col-reverse items-center md:flex-row gap-10 py-6 px-4 my-4'>
                            <div className=' flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'> CodeArena</h1>
                                <div className='flex flex-wrap gap-4'>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2 '>React.js</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2 '>Node.js</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2 '>Socket.io</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2'>TailwindCss</div>
                                </div>
                                
                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam, sed error molestiae reprehenderit delectus omnis ipsa minus at consectetur enim! Accusamus ut voluptas ducimus reiciendis doloremque quos ex atque.</p>
                                <div className='flex w-full gap-4 '>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-2 py-2 md:px-6 md:py-2'>Live Demo</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-2 py-2 md:px-6 md:py-2'>Source Code</div>
                                </div>
                            </div>
                            <img src={CodeArena} alt="" className='w-[100%] md:w-[600px]' />
                        </div>

                        <div className='w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4'>
                            <div className=' flex flex-col  gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'>Location Tracker</h1>
                                <div className='flex flex-wrap gap-4'>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2'>EJS</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2'>Node.js</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2'>Socket.io</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-4 md:px-6 py-2 '>Express.js</div>
                                </div>
                                
                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam, sed error molestiae reprehenderit delectus omnis ipsa minus at consectetur enim! Accusamus ut voluptas ducimus reiciendis doloremque quos ex atque.</p>
                                <div className='flex w-full gap-4 '>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-2 py-2 md:px-6 md:py-2'>Live Demo</div>
                                    <div className='text-sm text-purple-700 font-bold bg-purple-200 px-2 py-2 md:px-6 md:py-2'>Source Code</div>
                                </div>
                            </div>
                            <img src={RealTimeTracker} alt="" className='w-[100%] md:w-[600px]' />
                        </div>

                    </div>
                </div>

            </Container>
        </>
    )
}

export default Projects