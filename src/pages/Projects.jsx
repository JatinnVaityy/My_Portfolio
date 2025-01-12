import React, { useState } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

function Projects() {
  const [clicked, setClicked] = useState("hardware");

  const hardwareProjects = [
    {
      title: "Smart Umbrella Stand",
      description:
        "An automated umbrella drying stand with smart sensors and IoT integration for efficient drying and notifications.",
      technologies: ["ESP32", "Ultrasonic Sensor", "Relay Module"],
    },
    {
      title: "Automated Hydroponics System ",
      description:
        "A fully automated hydroponics system for growing plants with controlled environment parameters, based on STM32.",
      technologies: ["STM32", "Sensors", "Water Pump", "Relay Module"],
    },
    {
      title: "RSA Encryption Using FPGA ",
      description:
        "Implementing RSA encryption and decryption algorithm using FPGA, specifically Elbert V2.",
      technologies: ["FPGA", "Elbert V2", "VHDL"],
    },
    {
      title: "Smart Wheelchair (ESP32)",
      description:
        "A smart wheelchair with IoT integration, remote control, and health monitoring using ESP32.",
      technologies: ["ESP32", "Sensors", "ESP-NOW"],
    },
  ];

  const softwareProjects = [
    {
      title: "Real-Time Chatbot",
      description:
        "A conversational chatbot that provides instant replies and can handle multiple topics.",
      technologies: ["Node.js", "Socket.io", "React.js"],
    },
    {
      title: "Furniture E-commerce",
      description:
        "An online platform for purchasing furniture, complete with product categories, filtering.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "To-Do List",
      description:
        "A simple, interactive to-do list application with task management features, designed for daily use.",
      technologies: ["React.js"],
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-center py-8 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-[#22c55e] py-4 px-8 rounded-lg">
        Projects
      </h1>

      {/* Toggle Buttons */}
      <div className="w-full flex justify-center gap-6 mb-8">
        <button
          className={`py-2 px-6 rounded-md text-sm font-semibold transition-colors duration-300 ${
            clicked === "hardware"
              ? "bg-[#22c55e] text-white"
              : "bg-transparent text-white border border-[#22c55e] hover:bg-[#22c55e]"
          }`}
          onClick={() => setClicked("hardware")}
        >
          Hardware
        </button>
        <button
          className={`py-2 px-6 rounded-md text-sm font-semibold transition-colors duration-300 ${
            clicked === "software"
              ? "bg-[#22c55e] text-white"
              : "bg-transparent text-white border border-[#22c55e] hover:bg-[#22c55e]"
          }`}
          onClick={() => setClicked("software")}
        >
          Software
        </button>
      </div>

      {/* Projects Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {(clicked === "hardware" ? hardwareProjects : softwareProjects).slice(0, 3).map(
          (project, index) => (
            <Card
              key={index}
              className="w-[300px] bg-transparent border border-[#22c55e] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardBody className="p-6">
                <Typography
                  variant="h5"
                  className="mb-4 font-semibold text-white"
                >
                  {project.title}
                </Typography>
                <Typography className="text-gray-300 mb-4">
                  {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Button
                      key={idx}
                      className="bg-[#22c55e] text-white px-4 py-1 text-xs rounded-full mb-2"
                      size="sm"
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>
          )
        )}
      </div>

      {/* Horizontal Line */}
      <hr className="w-[90%] my-20 m-5 border-t-2 border-[#22c55e] mx-auto" />
    </div>
  );
}

export default Projects;
