import React, { useState } from 'react'
import Container from '../components/Container'
import ReactImg from "../assets/react.png"
import MaterialImg from "../assets/materialUI.png"
import ReduxImg from "../assets/redux.png"
import htmlImg from "../assets/html.png"
import tailwindcssImg from "../assets/tailwindcss.png"
import cssImg from "../assets/css.png"
import nodeImg from "../assets/node-js.png"
import mysqlImg from "../assets/mysql-logo.png"
import mongodbImg from "../assets/mongodb.png"
import expressImg from "../assets/express-js.png"
import gitImg from "../assets/git.png"
import cppImg from "../assets/cpp.png"
import javaImg from "../assets/java.svg"
import pythonImg from "../assets/python.png"

import javascriptImg from "../assets/js.png"

const data = [
    // Frontend
    { id: 1, imageUrl: ReactImg, tag: "frontend", text: "ReactJs" },
    { id: 2, imageUrl: MaterialImg, tag: "frontend", text: "MaterialUI" },
    { id: 3, imageUrl: htmlImg, tag: "frontend", text: "HTML" },
    { id: 4, imageUrl: tailwindcssImg, tag: "frontend", text: "TailwindCSS" },
    { id: 5, imageUrl: ReduxImg, tag: "frontend", text: "ReduxToolkit" },
    { id: 6, imageUrl: cssImg, tag: "frontend", text: "CSS" },

    // Backend
    { id: 7, imageUrl: nodeImg, tag: "backend", text: "Node.js" },
    { id: 8, imageUrl: mongodbImg, tag: "backend", text: "MongoDB" },
    { id: 9, imageUrl: mysqlImg, tag: "backend", text: "MySQL" },
    { id: 10, imageUrl: expressImg, tag: "backend", text: "Express.js" },

    // Tools
    { id: 11, imageUrl: gitImg, tag: "tools", text: "Git" },

   
    { id: 13, imageUrl: cppImg, tag: "lang", text: "C++" },
    { id: 14, imageUrl: javaImg, tag: "lang", text: "Java" },
    { id: 15, imageUrl: pythonImg, tag: "lang", text: "Python" },
    { id: 16, imageUrl: javascriptImg, tag: "lang", text: "JavaScript" },
]

function Skills() {
    const [clicked, setClicked] = useState("lang");

    return (
        <>
            <Container>
                <div id="skills" className='w-full h-auto flex flex-col items-center gap-4' data-aos="fade-up">
                    <div className='w-full flex justify-center my-3'>
                        <h1 className='text-3xl font-bold text-button'>Skills</h1>
                    </div>

                    {/* Compact Navbar */}
                    <div className='w-full flex justify-around gap-1 py-1 px-1 bg-primary border-2 border-border rounded-md md:w-[80%] lg:w-[60%]'>
                        <button
                            className={`flex-grow py-1 px-2 text-xs md:text-sm lg:text-base rounded-md hover:bg-button hover:text-gray-900 font-medium ${
                                clicked === 'lang' ? 'bg-button text-gray-900' : ''
                            }`}
                            onClick={() => setClicked("lang")}
                        >
                            Languages
                        </button>
                        <button
                            className={`flex-grow py-1 px-2 text-xs md:text-sm lg:text-base rounded-md hover:bg-button hover:text-gray-900 font-medium ${
                                clicked === 'frontend' ? 'bg-button text-gray-900' : ''
                            }`}
                            onClick={() => setClicked("frontend")}
                        >
                            Frontend
                        </button>
                        <button
                            className={`flex-grow py-1 px-2 text-xs md:text-sm lg:text-base rounded-md hover:bg-button hover:text-gray-900 font-medium ${
                                clicked === 'backend' ? 'bg-button text-gray-900' : ''
                            }`}
                            onClick={() => setClicked("backend")}
                        >
                            Backend
                        </button>
                        <button
                            className={`flex-grow py-1 px-2 text-xs md:text-sm lg:text-base rounded-md hover:bg-button hover:text-gray-900 font-medium ${
                                clicked === 'tools' ? 'bg-button text-gray-900' : ''
                            }`}
                            onClick={() => setClicked("tools")}
                        >
                            Tools
                        </button>
                    </div>

                    {/* Compact Skills Grid */}
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full md:w-[70%] lg:w-[50%] gap-4 md:gap-6 lg:gap-8 my-3'>
                        {data
                            .filter((item) => item.tag === clicked)
                            .map((ele) => (
                                <div className='flex flex-col items-center gap-1' key={ele.id}>
                                    <img
                                        src={ele.imageUrl}
                                        alt={ele.text}
                                        className='w-10 h-10 lg:w-12 lg:h-12 bg-primary p-1 rounded-full border-2 border-border'
                                    />
                                    <h1 className='text-xs md:text-sm lg:text-sm'>{ele.text}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Skills;
