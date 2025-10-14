import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { className } from "../lib/utils"




export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            
        }, 1500)
    }

    return <section id="contact" className="py-40 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
                Want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>

                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-6 md:space-y-0 ml-[-45px]">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <a
                                href="mailto:example@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                shd.irfan05@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/irfan-shahid1/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                linkedin.com/in/irfan-shahid1
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Github className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <a
                                href="https://github.com/Irfxn21"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                github.com/Irfxn21
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}