import { useState } from "react";
import toast from "react-hot-toast";

const Contact=()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Message sent! I'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to send message.");
            }
        } catch (err) {
            toast.error("Server error. Please try again later.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div id="contact" className="py-20 px-4 dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                        Let's Collaborate
                    </h2>
                    <p className="text-xl text-black/60 max-w-3xl mx-auto dark:text-cyan-400">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="max-w-xl md:max-w-3xl mx-auto dark:text-white">

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-cyan-900 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                            />
                        </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-cyan-900 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-cyan-900 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-800 to-cyan-500 text-white font-semibold rounded-lg hover:from-cyan-950 hover:to-cyan-600 transition-all duration-300"
                    >
                        <span className="text-black">Send Message</span>
                    </button>
                </form>
            </div>

           
        </div>
    </div>
  );
};

export default Contact;