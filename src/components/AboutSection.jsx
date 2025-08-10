import aboutpic from '../assets/aboutpic.jpg'; // Adjust path as necessary

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Hello! I'm <span className="font-semibold text-primary">Harkiran Kaur</span>, a passionate and detail-oriented software developer with a strong focus on frontend development. I enjoy turning complex problems into simple, beautiful, and intuitive web interfaces.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-6">
              My tech stack includes <span className="font-medium text-primary">React, Tailwind CSS, JavaScript</span>, and backend tools like <span className="font-medium text-primary">Node.js</span> and <span className="font-medium text-primary">Express</span>. I'm also comfortable with tools like <span className="font-medium text-primary">Firebase</span> and love learning new technologies.
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              I'm currently seeking opportunities to work on impactful projects, grow as a developer, and collaborate with awesome teams. Let’s connect and create something amazing!
            </p>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[300px] h-auto overflow-hidden border-4 border-purple-700 dark:border-purple-500 shadow-lg">
              <img
                src={aboutpic}
                alt="Harkiran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
