import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "NutriLens",
        description: "Full-stack web application that analyzes uploaded food images to estimate calorie and macronutrient values inreal time",
        image: "/projects/nutrilens.png",
        tags: ["React", "TailwindCSS", "Flask", "TensorFlow"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Minesweeper",
        description: "Star Wars inspired version of Minesweeper on linux, playable on both command line and graphical interface",
        image: "/projects/minesweeper.png",
        tags: ["C", "GTK", "Linux"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Premier League Match Predictor",
        description: "Machine learning model used to predict Premier League soccer matches",
        image: "/projects/soccer.png",
        tags: ["Python", "Pandas","BS4", "Scikit-Learn"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 4,
        title: "Amazon Website Clone",
        description: "Recreation of a sample Amazon Website with user interactivity, including features like cart management and checkout",
        image: "/projects/amazon.png",
        tags: ["Python", "Pandas","BS4", "Scikit-Learn"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 5,
        title: "Maze Runner",
        description: "Maze solving algorithm that computes an escape path for any given maze",
        image: "/projects/maze.png",
        tags: ["Java", "Maven"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 6,
        title: "Portfolio",
        description: "Machine learning model used to predict Premier League soccer matches",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind CSS","Vite"],
        demoUrl: "#",
        githubUrl: "#",
    },
];


export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-start mt-auto">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={21}/>
                                        <p>GitHub</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https:/github.com/Irfxn21">
                        Check MY Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}