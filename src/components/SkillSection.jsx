// SkillSection.jsx
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
   FaDatabase
} from "react-icons/fa";

const skills = [
  {
    title: "JavaScript",
    icon: <FaJsSquare size={32} className="text-yellow-400" />,
    badge: "Frontend Language",
    description: "Powerful scripting language used across the full stack.",
    badgeColor: "bg-yellow-800/70",
    shadowColor: "hover:shadow-yellow-500/50"
  },
  {
    title: "React",
    icon: <FaReact size={32} className="text-blue-400" />,
    badge: "Library",
    description: "Component-based UI library for building reactive apps.",
    badgeColor: "bg-blue-800/70",
    shadowColor: "hover:shadow-blue-500/50"
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={32} className="text-green-400" />,
    badge: "Backend",
    description: "Runtime environment for building fast server-side apps.",
    badgeColor: "bg-green-800/70",
    shadowColor: "hover:shadow-green-500/50"
  },
  {
    title: "Tailwind CSS",
    icon: <FaCss3Alt size={32} className="text-teal-300" />,
    badge: "Utility-First",
    description: "Modern styling framework with design freedom and speed.",
    badgeColor: "bg-teal-800/70",
    shadowColor: "hover:shadow-teal-500/50"
  },
  {
    title: "Git & GitHub",
    icon: <FaGitAlt size={32} className="text-orange-400" />,
    badge: "Version Control",
    description: "Tools to manage and collaborate on code efficiently.",
    badgeColor: "bg-orange-800/70",
    shadowColor: "hover:shadow-orange-500/50"
  },
{
  title: "SQL",
  icon: <span className="text-purple-400 text-2xl font-bold">SQL</span>,
  badge: "Database",
  description: "Used for querying and managing relational databases.",
  badgeColor: "bg-purple-800/70",
  shadowColor: "hover:shadow-purple-500/50"
}

];

export const SkillSection = () => {
  return (
    <section id="skills" className="pt-8 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-33">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group rounded-xl border border-gray-200 dark:border-white/10 p-6 transition-all duration-300 hover:scale-[1.02] ${skill.shadowColor} hover:shadow-xl cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/10">
                  {skill.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${skill.badgeColor} text-white`}
                  >
                    {skill.badge}
                  </span>
                </div>
              </div>
              <p className="text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};