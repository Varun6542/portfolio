import { FaCode, FaRocket, FaUser } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

const About=()=>{
    return(
        <div id="about" className="w-full py-20 px-4 bg-[var(--color-primary)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        A passionate React developer with a love for creating beautiful, functional, and user-friendly applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="w-48 h-48 border mx-auto rounded-full overflow-hidden hover:scale-110 border-2 border-cyan-500 transition-all duration-300">
                        <img src={profile} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-lg text-gray-300">
                        As a Full Stack Developer with internship experience, I enjoy building modern web applications using React, 
                        TypeScript, and other web technologies. I'm passionate about writing clean, easy-to-understand code and 
                        creating smooth, user-friendly experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 border border-cyan-500/30">
                        React
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">
                        JavaScript
                    </span>
                    {/* <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-green-300 border border-green-500/30">
                        Performance
                    </span> */}
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <p className="text-xl font-bold text-white">
                                Clean Code
                            </p>
                            <FaCode className="text-cyan-400" />                        
                        </div>
                        
                        
                        <p className="text-gray-300">
                            I focus on writing clean, easy-to-understand code that’s built to grow and last.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <p className="text-xl font-bold text-white">
                                Innovation 
                            </p>
                            <FaRocket className="text-purple-400" />
                        </div>
                        <p className="text-gray-300">
                            Always exploring new technologies and methodologies to build better and modern web solutions.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                    
                    <div className="flex flex-row items-center gap-2 mb-2">
                        <p className="text-xl font-bold text-white">
                            Collaboration 
                        </p>
                        
                        <FaUser className="text-green-400" />
                    </div>

                    <p className="text-gray-300">
                        Worked with senior developers to improve project features. A good team player with clear and friendly communication skills.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;