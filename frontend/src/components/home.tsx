import { FaEnvelope, FaGithub, FaHtml5, FaJava, FaJsSquare, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";

const Home=()=>{
    return(
      <div id="home" className="min-h-screen bg-[var(--color-secondary)] dark:bg-[var(--color-primary)] text-black dark:text-white overflow-x-hidden">
            <div className="inset-0 overflow-hidden pointer-events-none">
                <div className="floating-shapes">
                    <div className="shape shape-1">
                        <FaReact className="h-10 w-10 text-black dark:text-blue-500"/>
                    </div>
                    <div className="shape shape-2">
                        <FaHtml5 className="h-10 w-10 text-black dark:text-yellow-500"/>
                    </div>
                    <div className="shape shape-3">
                        <FaGithub className="h-10 w-10 text-black dark:text-cyan-500" />
                    </div>
                    <div className="shape shape-4 hidden sm:block">
                        <FaJsSquare className="h-10 w-10 text-black dark:text-white" />
                    </div>
                    <div className="shape shape-5">
                        <FaNodeJs className="h-10 w-10 text-black dark:text-blue-800" />
                    </div>
                    <div className="shape shape-6">
                        <FaJava className="h-10 w-10 text-black dark:text-red-500" />
                    </div>
                </div>
                <div className="particles">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className={`particle particle-${i % 5 + 1}`}></div>
                ))}
                </div>
            </div>
            <div className={`flex justify-center items-center relative z-10 flex-col `}
                  style={{ height: "calc(100vh - 90px)" }}

            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text dark:text-transparent animate-fade-in">
                    Hi, I'm Varun
                </h1>
                <p className="text-xl md:text-2xl text-white font-semibold mb-8 animate-fade-in">
                        Full-Stack Developer 
                </p>
                <p className="text-lg text-cyan-950 font-bold dark:text-[var(--color-highlight)] mb-12 max-w-2xl mx-auto animate-fade-in text-wrap text-center px-10"> 
                    Emerging web developer proficient in modern tools and design principles.
                </p>

                <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <a
                        href="https://github.com/Varun6542"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3  rounded-full transition-all duration-300 hover:scale-130 "
                    >
                        <FaGithub className="w-6 h-6 text-black dark:text-white" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hari-varun-kumar-pandrinki-67662b1b4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3  rounded-full transition-all duration-300 hover:scale-130 "
                    >
                        <FaLinkedin className="w-6 h-6 text-black dark:text-white" />
                    </a>

                    <a
                        href="mailto:varunp1001@gmail.com"
                        className="p-3  rounded-full transition-all duration-300 hover:scale-130 "
                    >
                        <FaEnvelope className="w-6 h-6 text-black dark:text-white" />
                    </a>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
                    <a
                        href="/Hari_Varun_Kumar_Pandrinki_Resume.pdf"
                        target="_blank"                
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-900 to-cyan-600 dark:from-cyan-500 dark:to-purple-500 text-black dark:text-white font-semibold rounded-full dark:hover:from-cyan-600 dark:hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg "
                    >
                        View My Resume/CV
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Home;