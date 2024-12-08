import React from 'react'
import wavinghand from "../assets/wavinghand.gif"
import snapchatavtar from "../assets/snapchatavtar.png"
import Container from '../components/Container'

function LandingPage() {
    return (
        <>
            <Container>
                <section id="home" className='mt-[12%] flex flex-col-reverse md:flex-row  justify-center gap-2 '>
                    {/* left part  */}
                    <div className='flex flex-col justify-center gap-4 w-full md:w-[50%]'>
                        <h1 className='flex items-center'>
                            <img src={wavinghand} alt="wavinghand" className='w-8' />
                            <p className=' text-xl md:text-2xl'>Hey!</p>
                        </h1>
                        <h1 className=' text-4xl md:text-6xl font-bold'>
                            I'm Akash Dange
                        </h1>
                        <h1 className='text-2xl '>
                            I am <span className='text-purple-700'>web developer</span>
                        </h1>
                        <p className=' w-full md:w-[70%] text-md text-justify'>
                            I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.
                        </p>

                        
                            <button className=' w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-purple-700 text-white font-thin md:font-semibold '>
                                {`About me >`}
                            </button>
                        

                    </div>

                    {/* right part */}
                    <div className='flex items-center justify-center my-4 '>
                        <img src={snapchatavtar} alt="avtar" className='rounded-full  w-[200px] md:w-[300px]' />
                    </div>
                </section>
            </Container>
        </>
    )
}

export default LandingPage