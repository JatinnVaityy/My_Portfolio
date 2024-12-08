import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from "react-scroll"
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <nav className="text-black h-6 w-full flex justify-between items-center text-xl px-8 py-6 md:px-20 md:py-6 mb-2  fixed top-0  bg-white/30 backdrop-blur-sm border-b border-gainsboro z-[999] transition-all ease-in ">
                <div>
                    <h1>Akash</h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-10'>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Home</li>
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>About</li>
                        </Link>


                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Projects</li>
                        </Link>

                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Experience</li>
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Contact</li>
                        </Link>

                    </ul>
                </div>

                {openMenu ? <div className='absolute top-[50px] left-[0px] bg-purple-500 text-white text-sm w-full'>
                    <ul className='flex flex-col  items-start gap-2 px-4 py-2 '>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Home</li>
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>About</li>
                        </Link>


                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Projects</li>
                        </Link>

                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Experience</li>
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div> : null}

                <div className='md:hidden' onClick={() => setOpenMenu((prev) => !prev)}>
                    {!openMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </div>
            </nav>
        </>
    )
}

export default Navbar