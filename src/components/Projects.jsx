function Projects() {
    return (
        <div>
            <h2 className="text-5xl font-extrabold mb-6 text-white">PROJECTS</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {[
                    {
                        name: "CALCULATOR",
                        href: "calculator/index.html",
                        desc: "Description of the first project.",
                    },
                    {
                        name: "LOOP",
                        href: "array objects/index.html",
                        desc: "Description of the second project.",
                    },
                    {
                        name: "CONVERTER",
                        href: "converter-activity/index.html",
                        desc: "Description of the third project.",
                    },
                    {
                        name: "ARRAY",
                        href: "array objects/index.html",
                        desc: "Description of the fourth project.",
                    },
                    {
                        name: "TO DO LIST",
                        href: "https://to-do-client-iq6f.vercel.app/",
                        desc: "Description of the fourth project.",
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-black rounded-lg shadow-lg p-6 h-64 flex flex-col justify-start items-start"
                    >
                        {/* Pin Emoji */}
                        <div className="absolute top-2 left-2 text-4xl">🧑‍💻</div>

                        {/* Project Content */}
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-bold text-blue-800 hover:underline mt-6"
                        >
                            {project.name}
                        </a>
                        <p className="mt-2 text-black">{project.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
