import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-3 px-4 relative">
            <div className="container mr-auto max-w-10xl mt-20 md:pl-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/projects/pfp.jpeg"
                            className="rounded-full object-cover w-64 h-64 md:w-[420px] md:h-[420px]"
                        />
                    </div>

                    {/* Card */}
                    <div>
                        <div className="gradient-border p-6 card-hover w-full">
                            <div className="text-left space-y-4">
                                <p className="text-muted-foreground text-base md:text-lg">
                                    Hi! I'm Irfan Shahid, a fourth-year Software Engineering student at McMaster University.
                                </p>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    My journey into software began long before university, sparked by curiosity about how the apps and systems we use everyday actually work. That curiosity turned into a passion for problem-solving, and eventually, a decision to study software engineering where I could push myself both technically and personally.
                                </p>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    Right now, I am looking for an internship opportunity where I can apply my technical skills, contribute to meaningful projects, and continue learning from experienced developers. For me, every new project is another step in my journey of growth and I am eager to take that next step with a team that values curiosity, impact, and innovation.
                                </p>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    Let's connect to share ideas, collaborate on projects, and explore new opportunities together!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}