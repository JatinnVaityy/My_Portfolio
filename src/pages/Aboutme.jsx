import React from 'react'
import AkashPic from "../assets/AkashPhoto.jpeg"
import Container from '../components/Container'
function Aboutme() {
    return (
        <>
            <Container>
                <section id="about" className='mt-[50px] my-2 flex flex-col items-center '>

                    <div className='w-full flex justify-center text-2xl font-thin  my-6'>
                        <h1 className='text-2xl md:text-4xl font-bold'>About me</h1>
                    </div>

                    <div className='flex flex-col md:flex-row '>

                        {/* left part  */}
                        <div className='flex items-center justify-center my-4 w-full'>
                            <img src={AkashPic} alt="avtar" className='rounded-md  w-[200px] md:w-[300px]' />
                        </div>


                        {/* right part */}
                        <div className='flex flex-col justify-center  items-center md:items-start gap-4 w-full'>

                            <h1 className=' text-2xl md:text-4xl font-bold'>
                                Akash Dange
                            </h1>

                            <span className='text-purple-500 bg-purple-200 px-4 py-1 rounded-md'>web developer</span>

                            <p className=' w-full md:w-[70%] text-md text-justify'>
                                I am currently pursuing a BE degree in Computer Engineering at Terna Engineering College.
                                I have also completed Diploma in Information Technology from Government Polytechnic Thane. My knowledge base includes proficiency in HTML, CSS, C, C++, MySQL, Java, and Python. I am currently working towards becoming a proficient web developer.
                            </p>

                            <button className=' w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-purple-700 text-white text-sm md:font-semibold '>
                                {`Resume`}
                            </button>
                        </div>
                    </div>

                </section>
            </Container>
        </>
    )
}

export default Aboutme