import IconGlobe from "./IconGlobe";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "tailwindcss",
  "html5",
  "css3",
  "express",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "redux",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

const Skills = () => {
  return (
    <div id="skills" className="mb-10">
        <IconGlobe slugs={slugs} />
    </div>
  );
};

export default Skills;
