import { useEffect, useState } from "react";
import ThemeToggle from "./themeToggle";

const Header=()=>{


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const navLinks=[
        {href:"#home",label:"Home"},
        {href:"#about",label:"About"},
        {href:"#skills",label:"Skills"},
        {href:"#projects",label:"Projects"},
        {href:"#contact",label:"Contact"}
    ]



    return(
        <div className={`fixed top-0 w-full px-4 sm:px-6 lg:px-8 z-40 transition-all duration-300 
            ${
                scrolled ? "bg-[var(--color-secondary)] dark:bg-[var(--color-primary)]" : "bg-transparent"
            }
        `}
        >
            <div className="flex justify-between items-center px-12 py-4">
                <div className="text-2xl font-bold text-black dark:text-white">
                    Varun
                </div>
                <div className="space-x-8 sm:flex">
                    {navLinks.map((link)=>(
                        <a key={link.href}
                            href={link.href}
                            className="relative group font-semibold dark:text-white hidden sm:block"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                        </a>
                    ))}
                    <ThemeToggle/>
                </div>

                
            </div>
        </div>
    )
}

export default Header;