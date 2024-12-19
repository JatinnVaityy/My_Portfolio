import React from 'react';
import Container from '../components/Container';

const TimelineItem = ({ company, role, duration, description }) => {
    return (
        <li className="mb-10 ms-4" data-aos="fade-left">
            <div className="absolute w-6 h-6 rounded-full mt-1.5 -start-8 border border-white bg-button"></div>
            <time className="mb-1 text-md font-normal leading-none  ">{duration}</time>
            <h3 className="text-xl my-2 font-semibold text-button ">{role} . <span className="text-md font-thin">{company}</span></h3>
            <ul className="mb-4 text-sm text-justify font-normal list-disc list-inside md:text-md">
                {description.map((desc, index) => (
                    <li key={index} className="my-2">{desc}</li>
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
            <div id="experience" className=' w-full md:w-[50%] my-6 flex flex-col items-center gap-4' data-aos="fade-up">
                <div className='w-full flex justify-center text-2xl font-thin my-4'>
                    <h1 className='text-4xl md:text-4xl font-bold text-button'>Experience</h1>
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
