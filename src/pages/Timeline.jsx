import React from 'react';
import Container from '../components/Container';

const Achievements = () => {
    const achievementsData = [
        {
            title: "2nd Rank Holder in EXTC"
        },
        {
            title: "Won Zonal Round of Avishkar'23"
        },
        {
            title: "Solved 200+ Coding Problems"
        }
    ];

    const certificationsData = [
        {
            title: "HTML & CSS from Udemy",
           
        },
        {
            title: "Networking Basics from Cisco",
           
        },
        {
            title: "Cloud Computing from Simplilearn",
           
        }
    ];

    const handleViewCertifications = () => {
        // Redirect to certifications page or link
        window.location.href = "https://drive.google.com/file/d/1KCZur_HSajj55yLL3oNqBMhZVr1o1U-7/view?usp=sharing"; // Replace with your actual certifications page URL
    };

    return (
        <Container>
            <div id="achievements" className="w-full md:w-[50%] my-6 flex flex-col items-center gap-4">
                <div className="w-full flex justify-center text-2xl font-thin my-4">
                    <h1 className="text-4xl md:text-4xl font-bold text-button">Achievements & Certifications</h1>
                </div>

                {/* Achievements Section */}
                <div className="w-full flex flex-col gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-button mb-4">Achievements</h3>
                        <ul className="list-disc pl-5 text-md font-normal text-justify">
                            {achievementsData.map((achievement, index) => (
                                <li key={index} className="mb-2">
                                    <strong>{achievement.title}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-button mb-4">Certifications</h3>
                        <ul className="list-disc pl-5 text-md font-normal text-justify">
                            {certificationsData.map((certification, index) => (
                                <li key={index} className="mb-2">
                                    <a
                                        href={certification.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    
                                    >
                                        <strong>{certification.title}</strong>
                                    </a>
                                    <p className="mt-2 text-sm text-gray-300">{certification.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* View Certifications Button */}
                    <div className="w-full flex justify-center mt-6">
                        <button
                            onClick={handleViewCertifications}
                            className="py-2 px-6 bg-[#22c55e] text-white rounded-md text-sm font-semibold hover:bg-[#7e3b6e] transition-colors duration-300"
                        >
                            View Certifications
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Achievements;
