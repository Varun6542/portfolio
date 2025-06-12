import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects=()=>{
   const projects = [
    {
      title: "VCard – Virtual Business Card Management System",
      description: "A full-stack platform for creating, managing, and sharing digital business cards with secure, role-based access control. (Super Admin, Admin, User). Features include secure JWT authentication, protected routes, and RESTful APIs.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT","PM2"],
      image: "/vcard.png",
    },
    {
      title: "Wellness Mart",
      description: "Console-based shopping application for health and wellness products with user registration/login, product catalog, and shopping cart functionality.",
      technologies: ["Core Java", "OOP", "Inheritance", "Encapsulation"],
      image: "/wellnessmart.jpg",
    },
    {
      title: "E-Commerce Website (Frontend)",
      description: "Developed a responsive e-commerce website (hosted on Netlify) featuring product browsing, cart management, and a checkout system. Used a fake API for product data, enabled add-to-cart functionality, and integrated Mailtrap.io to simulate order confirmation emails.",
      image: "/esalesone.jpg",
      technologies: ["React","Tailwind CSS", "Node.js", "Mailtrap.io", "Netlify"],
      github: "https://github.com/Varun6542/eSalesOne",
      live: "https://varunesalesone.netlify.app/",
    },
    
  ];

  return (
    <div id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-900 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Some of my recent work that showcases my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-black rounded-xl overflow-hidden border transition-all duration-300 hover:scale-103 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:scale-105"
                    >
                      <FaGithub className="w-3 h-3" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:scale-105"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;



