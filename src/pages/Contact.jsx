import React, { useState } from "react";
import Container from "../components/Container";
import ContactMe from "../assets/contactMe.png";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Jatin Vaity",
        message: formData.message,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from .env
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from .env
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key from .env
            );
            toast.success("Thank you for reaching out. I will get back to you soon.");
        } catch (error) {
            console.log(error);
            toast.error("Error while sending mail");
        } finally {
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <>
            <Container>
                <div id="contact" className="w-full flex flex-col items-center gap-4" data-aos="fade-up">
                    <div className='w-full flex justify-center text-2xl font-thin my-6'>
                        <h1 className="text-4xl md:text-4xl font-bold text-button">Contact</h1>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[50%]">
                            <img src={ContactMe} alt="Contact Me" />
                        </div>
                        <div className="w-full md:w-[50%] bg-primary p-6 rounded-lg shadow-md border-2 border-border">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-md my-2 font-medium"
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
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-md my-2 font-medium"
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
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-md my-2 font-medium"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-button text-gray-900 rounded-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
