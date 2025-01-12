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
                <div id="skills" className='w-full h-[80%] flex flex-col items-center gap-4' data-aos="fade-up" >
                    <div className='w-full flex justify-center text-2xl font-thin my-4'>
                        <h1 className='text-4xl md:text-4xl font-bold text-button '>Skills</h1>
                    </div>

                    <div className='w-auto bg-primary flex justify-around md:gap-4 py-2 px-2 border-2 border-border rounded-md'>
                        <button className={`w-[50%] py-2 px-6 rounded-md hover:bg-button hover:text-gray-900 text-sm md:font-semibold ${clicked === 'lang' ? 'bg-button text-gray-900' : null}`} onClick={() => setClicked("lang")}>
                            Languages
                        </button>
                        <button className={`w-[50%] py-2 px-6 rounded-md hover:bg-button hover:text-gray-900 text-sm md:font-semibold ${clicked === 'frontend' ? 'bg-button text-gray-900' : null}`} onClick={() => setClicked("frontend")}>
                            Frontend
                        </button>
                        <button className={`w-[50%] py-2 px-6 rounded-md hover:bg-button hover:text-gray-900 text-sm md:font-semibold ${clicked === 'backend' ? 'bg-button text-gray-900' : null}`} onClick={() => setClicked("backend")}>
                            Backend
                        </button>
                        <button className={`w-[50%] py-2 px-6 rounded-md hover:bg-button hover:text-gray-900 text-sm md:font-semibold ${clicked === 'tools' ? 'bg-button text-gray-900' : null}`} onClick={() => setClicked("tools")}>
                            Tools
                        </button>
                    </div>

                    {/* grid */}
                    <div className='grid grid-cols-3 w-full md:grid-cols-4 md:w-[50%] gap-10 my-4'>
                        {data.filter((item) => item.tag === clicked)
                            .map((ele) => (
                                <div className='flex flex-col items-center gap-2' key={ele.id}>
                                    <img src={ele.imageUrl} alt={ele.text} className='size-16 bg-primary p-2 rounded-full border-2 border-border' />
                                    <h1>{ele.text}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Skills
