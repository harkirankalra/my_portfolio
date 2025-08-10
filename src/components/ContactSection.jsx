import React from "react";

const ContactMe = () => {
  return (
   <section id="contact" className="py-24 px-4 relative scroll-mt-20">
  <div className="container mx-auto max-w-6xl">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Contact <span className="text-primary">Me</span>
    </h2>
    <p className="text-center text-gray-300 mb-12">
      Want to connect? My inbox is always open!
  </p>

        <p className="mb-6 text-lg">
          Thank you <span className="text-purple-400">so much</span> for taking
          out your precious time to visit my portfolio!
        </p>

        <p className="mb-6 text-lg">
          If you have any questions or would like to{" "}
          <span style={{ color: "#a78bfa" }}>
            connect with me, please feel free to reach out,
          </span>{" "}
          I'll do my best to get back to you as soon as possible.
        </p>

        <p className="mb-6 text-lg">
          I'm always interested in new opportunities and collaborations, so{" "}
          <span className="text-purple-400">don’t hesitate to get in touch!</span>
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xkgzkbav"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="bg-gray-900 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="bg-gray-900 text-white p-4 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all"
          >
            Submit <span>🚀</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

