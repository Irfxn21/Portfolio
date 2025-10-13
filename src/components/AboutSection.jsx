import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {

    return <section id="about" className="py-3 px-4 relative">

            <div className="container mx-auto max-w-5xl mt-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center margin">
                    About <span className="text-primary"> Me</span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 items-center ml-[-120px]">
                    <div className="space-y-6">
                        <img src="/projects/pfp.jpeg" className="rounded-full object-cover w-105 h-105"></img>
                    </div>

                    <div className="grid grid-cols-1 gap-6 ml-[-30px]">
                        <div className="gradient-border p-6 card-hover w-[750px] mx-auto">
                            <div className="flex items-start gap-4">
                                <div className="text-left space-y-4">
                                    <p className="text-muted-foreground break-words text-lg">
                                        Hi! I'm Irfan Shahid, a third-year Software Engineering student at McMaster University and an international student who took a leap to study abroad in pursuit of growth, challenge, and opportunity.
                                    </p>
                                    <p className="text-muted-foreground break-words text-lg">
                                        My journey into software began long before university—sparked by curiosity about how the apps and systems we use everyday actually work. That curiosity turned into a passion for problem-solving, and eventually, a decision to study software engineering abroad  where I could push myself both technically and personally.
                                    </p>
                                    <p className="text-muted-foreground break-words text-lg">
                                        Right now, I am looking for an internship opportunity where I can apply my technical skills, contribute to meaningful projects, and continue learning from experienced developers. For me, every new project is another step in my journey of growth—and I am eager to take that next step with a team that values curiosity, impact, and innovation.
                                    </p>
                                    <p className="text-muted-foreground break-words text-lg">
                                        Let's connect to share ideas, collaborate on projects, and explore new opportunities together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


}