import React from 'react';
import Container from '../components/Container';

const TimelineItem = ({ company, role, duration, description }) => {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-2 border border-white bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-black ">{duration}</time>
            <h3 className="text-md my-2 font-semibold text-gray-900 ">{role} . <span className="text-sm font-thin">{company}</span></h3>
            <ul className="mb-4 text-md font-normal  text-black list-disc list-inside">
                {description.map((desc, index) => (
                    <li key={index} className="  ">{desc}</li>
                ))}
            </ul>
        </li>
    );
};

const Timeline = () => {
    const timelineData = [
        {
            company: "Simtrak Solutions",
            role: "SDE Intern",
            duration: "Aug 2024 - Oct 2024",
            description: [
                "Led performance optimization efforts during the first 1-2 weeks, improving website speed using Lighthouse for reporting and Next.js for optimization.",
                "Enhanced SEO by generating sitemaps and robot.txt files, contributing to improved search rankings."
            ]
        },
        {
            company: "Imperative Business Ventures Limited",
            role: "Frontend Developer",
            duration: "Nov 2023 - Jan 2024",
            description: [
                "Developed and maintained responsive web pages to enhance user experience.",
                "Constructed a responsive website with HTML, CSS, JavaScript, and Bootstrap, which successfully supported mobile users."
            ]
        }
    ];

    return (
        <Container>
            <div id="experience" className=' w-full md:w-[50%] my-6 flex flex-col items-center gap-4'>
                <div className='w-full flex justify-center text-2xl font-thin my-4'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Experience</h1>
                </div>
                <ol className="relative border-s-4 border-purple-200">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            company={item.company}
                            role={item.role}
                            duration={item.duration}
                            description={item.description}
                        />
                    ))}
                </ol>
            </div>

        </Container>
    );
};

export default Timeline;
