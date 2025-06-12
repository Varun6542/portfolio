import { Toaster } from 'react-hot-toast';
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";
import Projects from "../components/projects";
import Skills from "../components/skills";


const Index=()=>{
    return(
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Toaster/>
        </>
    )
}

export default Index;