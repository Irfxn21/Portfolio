import { useState } from "react"
import { className } from "../lib/utils";


const skills = [
    // Languages
    { name: "Python", icon: "devicon-python-plain colored", category: "languages" },
    { name: "Java", icon: "devicon-java-plain colored", category: "languages" },
    { name: "HTML", icon: "devicon-html5-plain colored", category: "languages" },
    { name: "CSS/Tailwind CSS", icon: "devicon-tailwindcss-original colored", category: "languages" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "languages" },
    { name: "C", icon: "devicon-c-original colored", category: "languages" },
    { name: "Bash", icon: "devicon-bash-plain", category: "languages" },
    { name: "MATLAB", icon: "devicon-matlab-plain colored", category: "languages" },

    // Libraries/Libraries/Frameworks
    { name: "React.js", icon: "devicon-react-original colored", category: "Libraries/Framework" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored", category: "Libraries/Framework" },
    { name: "Flask", icon: "devicon-flask-original", category: "Libraries/Framework" },
    { name: "OpenCV", icon: "devicon-opencv-plain colored", category: "Libraries/Framework" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored", category: "Libraries/Framework" },

    // Dev Tools
    { name: "VS Code", icon: "devicon-vscode-plain colored", category: "Dev Tools" },
    { name: "Git/GitHub", icon: "devicon-github-original", category: "Dev Tools" },
    { name: "Chrome DevTools", icon: "devicon-chrome-plain colored", category: "Dev Tools" },
    { name: "Jupyter Notebook", icon: "devicon-jupyter-plain colored", category: "Dev Tools" },
    { name: "Ubuntu", icon: "devicon-ubuntu-plain colored", category: "Dev Tools" },
    { name: "Linux", icon: "devicon-linux-plain colored", category: "Dev Tools" },
    { name: "Apache Maven", icon: "devicon-maven-plain colored", category: "Dev Tools" },  
    { name: "Anaconda", icon: "devicon-anaconda-original colored", category: "Dev Tools" },
    { name: "Vite", icon: "devicon-vite-original colored", category: "Dev Tools" },
    
    
    
];

const categories = ["all", "languages", "Libraries/Framework", "Dev Tools"];




export const SkillsSection = () => {

    const [activeCategory, setActiveCategory ] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return <section 
                id="skills" 
                className="py-24 px-4 relative bg-secondary/30">

                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                            My <span className="text-primary"> Skills</span>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category, key) => (
                                <button 
                                    key={key}
                                    onClick={() => setActiveCategory(category)}
                                    className={className(
                                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-lg",
                                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                                    )}>

                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredSkills.map((skill, key) => (
                                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                                    <div className="flex items-center justify-center gap-3">
                                        <i className={`${skill.icon} text-3xl`}></i>
                                        <h3 className="font-semibold text-xl">
                                            {skill.name}
                                        </h3>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>  
            </section>
}