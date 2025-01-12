import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleSetActive = (value) => {
        setActiveLink(value);
    };

    return (
        <nav className="text-white h-6 w-[80%] flex justify-between items-center text-xl px-8 py-6 md:px-20 md:py-6 mb-2 fixed top-5 left-1/2 transform -translate-x-1/2 bg-primary/30 backdrop-blur-sm border-b border-gainsboro z-[999] rounded-full transition-all ease-in">
            <div>
                <h1 className='text-button font-bold'>Jatin</h1>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-10'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className={`cursor-pointer ${activeLink === "home" ? "text-[#22c55e]" : ""}`}
                        onClick={() => handleSetActive("home")}
                    >
                        <li>Home</li>
                    </Link>

                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className={`cursor-pointer ${activeLink === "projects" ? "text-[#22c55e]" : ""}`}
                        onClick={() => handleSetActive("projects")}
                    >
                        <li>Projects</li>
                    </Link>

                    <Link
                        to="achievements"
                        smooth={true}
                        duration={500}
                        className={`cursor-pointer ${activeLink === "achievements" ? "text-[#22c55e]" : ""}`}
                        onClick={() => handleSetActive("achievements")}
                    >
                        <li>Achievements</li>
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={`cursor-pointer ${activeLink === "contact" ? "text-[#22c55e]" : ""}`}
                        onClick={() => handleSetActive("contact")}
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

            {openMenu && (
                <div className='absolute top-[60px] left-0 bg-primary text-white text-sm w-full rounded-md'>
                    <ul className='flex flex-col items-start gap-4 px-4 py-2'>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "home" ? "text-[#9b4c9d]" : ""}`}
                            onClick={() => handleSetActive("home")}
                        >
                            <li>Home</li>
                        </Link>

                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "projects" ? "text-[#9b4c9d]" : ""}`}
                            onClick={() => handleSetActive("projects")}
                        >
                            <li>Projects</li>
                        </Link>

                        <Link
                            to="achievements"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "achievements" ? "text-[#9b4c9d]" : ""}`}
                            onClick={() => handleSetActive("achievements")}
                        >
                            <li>Achievements</li>
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "contact" ? "text-[#9b4c9d]" : ""}`}
                            onClick={() => handleSetActive("contact")}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            )}

            <div className='md:hidden' onClick={() => setOpenMenu((prev) => !prev)}>
                {!openMenu ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon className="text-button" icon={faXmark} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
