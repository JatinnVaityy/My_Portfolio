import React, { useState } from "react";
import Container from "../components/Container";
import ContactMe from "../assets/contactMe.png"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulating a form submission (replace this with your backend/API)
            console.log("Form submitted:", formData);
            setStatus("Message sent successfully!");
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <Container>
                <div id="contact" className="w-full flex flex-col items-center gap-4">
                    <div className='w-full flex justify-center text-2xl font-thin my-6'>
                        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
                    </div>
                    <div className="w-full  flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[50%]">
                            <img src={ContactMe} alt="" />
                        </div>
                        <div className="w-full md:w-[50%] bg-white p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-md my-2 font-medium text-purple-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-md my-2 font-medium text-purple-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-md my-2 font-medium text-purple-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </form>
                            {status && <p className="mt-4 text-center text-sm text-green-600">{status}</p>}
                        </div>
                    </div>
                </div>


            </Container>

        </>

    );
};

export default Contact;
