import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaPython,
  FaCuttlefish,
} from "react-icons/fa";

import { SiMongodb, SiFigma, SiDotnet } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", level: 75, icon: <FaReact />, color: "#61DBFB" },
    { name: "CSS", level: 70, icon: <FaCss3Alt />, color: "#264de4" },
    { name: "HTML", level: 80, icon: <FaHtml5 />, color: "#e34c26" },
    { name: "JavaScript", level: 75, icon: <FaJs />, color: "#f7df1e" },
    { name: "C++", level: 50, icon: <FaCuttlefish />, color: "#00599C" },
    { name: "Figma", level: 60, icon: <SiFigma />, color: "#a259ff" },
    { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Python", level: 55, icon: <FaPython />, color: "#3776ab" },
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "#f1502f" },
    { name: "Office", level: 90, icon: "📊", color: "#ffb900" },
    { name: "Assembly", level: 35, icon: "⚙️", color: "#888" },
    { name: "Photoscape", level: 95, icon: "🖼️", color: "#00c2ff" },
    { name: "C#", level: 55, icon: "💠", color: "#9b4f96" },
    { name: ".NET", level: 50, icon: <SiDotnet />, color: "#512bd4" },
    { name: "IA", level: 70, icon: "🤖", color: "#10b981" },
  ];

  return (
    <section id="skills" className="section">
      <h2>Compétences</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-top">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <span>{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color,
                }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}