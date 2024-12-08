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

const data = [
    {
        id:1,
        imageUrl:ReactImg,
        tag:"frontend",
        text:"ReactJs"
    },
    {
        id:2,
        imageUrl:MaterialImg,
        tag:"frontend",
        text:"MaterialUI"
    },
    {
        id:3,
        imageUrl:htmlImg,
        tag:"frontend",
        text:"HTML"
    },
    {
        id:4,
        imageUrl:tailwindcssImg,
        tag:"frontend",
        text:"tailwindcss"
    },
    {
        id:5,
        imageUrl:ReduxImg,
        tag:"frontend",
        text:"ReduxToolkit"
    },
    {
        id:6,
        imageUrl:cssImg,
        tag:"frontend",
        text:"css"
    },
    {
        id:7,
        imageUrl:nodeImg,
        tag:"backend",
        text:"Nodejs"
    },
    {
        id:8,
        imageUrl:mongodbImg,
        tag:"backend",
        text:"mongodb"
    },
    {
        id:9,
        imageUrl:mysqlImg,
        tag:"backend",
        text:"mysql"
    },
    {
        id:10,
        imageUrl:expressImg,
        tag:"backend",
        text:"expressJs"
    },
    {
        
        id:11,
        imageUrl:gitImg,
        tag:"tools",
        text:"Git"
    }

]

function Skills() {
    const [clicked,setClicked] = useState("frontend");
    return (
        <>
            <Container>
                <div id="skills" className='w-full h-[80%] flex flex-col items-center gap-4'>
                    
                    <div className='w-full flex justify-center text-2xl font-thin my-4'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Skills</h1>
                    </div>

                    <div className='w-auto bg-purple-200 flex justify-around md:gap-4 py-2 px-2 rounded-md'>
                        <button className={`w-[50%] py-2 px-6 rounded-md text-purple-700 hover:bg-purple-700 hover:text-white text-sm md:font-semibold ${clicked === 'frontend' ? 'bg-purple-700 text-white' : null }`} onClick={()=>setClicked("frontend")}>
                            Frontend
                        </button>
                        <button className={` w-[50%] py-2 px-6 rounded-md text-purple-700 hover:bg-purple-700 hover:text-white text-sm md:font-semibold ${clicked === 'backend' ? 'bg-purple-700 text-white' : null }`}  onClick={()=>setClicked("backend")}>
                            Backend
                        </button>
                        <button className={`w-[50%]  py-2 px-6 rounded-md text-purple-700 hover:bg-purple-700 hover:text-white text-sm md:font-semibold ${clicked === 'tools' ? 'bg-purple-700 text-white' : null }`}  onClick={()=>setClicked("tools")}>
                            Tools
                        </button>
                    </div>

                    {/* grid */}
                    <div className='grid grid-cols-3  w-full md:grid-cols-4 md:w-[50%] gap-10 my-4'>
                       { data.filter((item)=>item.tag===clicked).
                            map((ele)=>(
                                <div className='flex flex-col items-center gap-2'>
                                    <img src={ele.imageUrl} alt="" className='size-16 bg-purple-200 p-2 rounded-full' />
                                    <h1>{ele.text}</h1>
                                </div>
                            ))
                       }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Skills