import React from "react";

const projects = [
  {
    title: "Expense Tracker System",
    description:
      "A web application to manage income and expenses with category filters, graphs, and summaries. Built with React and local storage.",
    techStack: ["React", "Tailwind", "JavaScript","FireBase"],
    image: "/projects/Project1.png", // Update with your actual image filename
    link: "https://github.com/harkirankalra/Cashflow-Expense-Tracker",
  },
  {
    title: "CollabCode - Real-Time Code Editor",
    description:
      "A collaborative code editor with real-time syncing, syntax highlighting, and multi-user support using React, Node.js, and Socket.IO.",
    techStack: ["React", "Node.js", "Socket.IO", "CSS"],
    image: "/projects/Project2.png", // Update with your actual image filename
    link: "https://github.com/harkirankalra?tab=repositories",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background stars/meteors can be added here if you want */}
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-border card-hover rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm text-blue-600 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
