import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section id="hero"className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 relative z-10 gap-10">
      
      {/* Profile Image */}
      <div className="md:mr-12">
        <div
          className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 shadow-lg"
          style={{ borderColor: "hsl(var(--primary))" }}
        >
          <img
            src={profileImg}
            alt="Harkiran"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        {/* Greeting */}
        <h1
          className="text-5xl font-bold mb-2"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Hey, I'm{' '}
          <span style={{ color: "hsl(var(--primary))" }}>Harkiran</span>
        </h1>

        {/* Typewriter Title */}
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: "hsl(var(--primary))" }}
        >
          I'm a{' '}
          <span style={{ color: "hsl(var(--foreground))" }}>
            <Typewriter
              words={['Frontend Developer', 'Backend Developer', 'Software Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-lg leading-relaxed"
          style={{ color: "hsl(var(--foreground))" }}
        >
          I craft interactive and responsive web applications using React, Tailwind, and modern frontend tools. Let’s build something amazing!
        </p>

        {/* Social Icons */}
        <div
          className="flex justify-center md:justify-start gap-6 text-2xl mt-6"
          style={{ color: "hsl(var(--primary))" }}
        >
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        {/* Download Button */}
        <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/files/HarkiranKaur.pdf"; // path in public folder
    link.download = "MyCV.pdf"; // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="mt-6 px-8 py-2 rounded-full transition text-lg"
  style={{
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
  }}
>
  Download CV
</button>

      </div>
    </section>
  );
};

export default HeroSection;
