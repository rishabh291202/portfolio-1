import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiHackerrank, SiTryhackme, SiCodechef, SiKalilinux, SiCplusplus, SiReact, SiPython, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import "./App.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpg"; // Make sure this path is correct

const MotionCard = ({ href, title, description }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.a>
);

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <motion.img
            src={profileImage}
            alt="Rishabh Shavare"
            className="hero-img"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="hero-text">
            <h1>Rishabh Shavare</h1>
            <p>Cybersecurity Enthusiast & Web Developer</p>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          Hi! I am Rishabh Shavare, a passionate cybersecurity and cloud data professional with hands-on experience in web development, data engineering, and cloud platforms such as Azure, Databricks, and Snowflake. I have a strong foundation in ethical hacking, vulnerability assessment, and secure coding practices, along with practical exposure to building automation tools and malware analysis environments. My technical skill set spans full-stack web development, ETL pipelines, API testing, and database management. I enjoy solving complex problems, analyzing threats, and implementing scalable solutions. I have actively contributed to bug bounty programs and security research, enhancing my practical understanding of real-world vulnerabilities. I am continuously learning emerging technologies and best practices to stay ahead in the rapidly evolving tech landscape. My goal is to leverage my skills to develop secure, efficient, and innovative solutions that drive organizational growth.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="https://yourportfolio.com"
              title="Portfolio Website"
              description="My personal website built with React and deployed on Netlify."
            />
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="#"
              title="Alumni Connection Platform"
              description="Web-based platform connecting alumni and students for networking, mentorship, and event management."
            />
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="#"
              title="Mobile-to-PC Keylogger"
              description="Cross-platform keylogger developed for studying input logging and security vulnerabilities ethically."
            />
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="#"
              title="Bug Bounty Research & Reporting"
              description="Conducted vulnerability assessments on platforms like Spreaker and Ably, documenting findings in detailed reports."
            />
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="https://github.com/yourusername/bug-bounty-tool"
              title="Bug Bounty Automation Tool"
              description="Tool for automating basic bug bounty reconnaissance tasks."
            />
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} style={{ width: "280px" }}>
            <MotionCard
              href="https://github.com/yourusername/cybersecurity-scripts"
              title="Cybersecurity Scripts"
              description="Python scripts for network scanning and vulnerability detection."
            />
          </Tilt>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card"><SiKalilinux className="skill-icon" /><p>Kali Linux</p></div>
          <div className="skill-card"><SiCplusplus className="skill-icon" /><p>C++</p></div>
          <div className="skill-card"><SiPython className="skill-icon" /><p>Python</p></div>
          <div className="skill-card"><SiJavascript className="skill-icon" /><p>JavaScript</p></div>
          <div className="skill-card"><SiHtml5 className="skill-icon" /><p>HTML</p></div>
          <div className="skill-card"><SiCss3 className="skill-icon" /><p>CSS</p></div>
          <div className="skill-card"><SiReact className="skill-icon" /><p>React</p></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <div className="social-icons">
          <a href="mailto:rishabhshavare2002@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/rishabh-shavare/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/rishabh291202" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/_rishabh.2912/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/9893469755" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.hackerrank.com/profile/rishabhshevere21" target="_blank" rel="noopener noreferrer"><SiHackerrank /></a>
          <a href="https://tryhackme.com/p/rishabh02" target="_blank" rel="noopener noreferrer"><SiTryhackme /></a>
          <a href="https://www.codechef.com/users/rishabhshavare" target="_blank" rel="noopener noreferrer"><SiCodechef /></a>
        </div>
      </section>

      <footer>
        <p>© 2025 Rishabh Shavare</p>
      </footer>
    </div>
  );
}

export default App;
