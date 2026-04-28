import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Dark mode
  useEffect(() => {
    document.body.classList.toggle("light-mode", !dark);
  }, [dark]);

  // Scroll spy (section active)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDark(!dark);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = (id) =>
    active === id ? "active-link" : "";

  return (
    <nav className="navbar glass">
        <div className="logo">
            <div className="avatar-wrapper">
                <img src="/moi.jpeg" alt="Rayan" className="avatar" />

                <div className="identity">
                <span className="fullname">NESTOR RAYAN TEDDY</span>
                <span className="firstname">NGASSEU NWOTCHEU</span>
                <a href="mailto:rngasseu123@gmail.com" className="email">
                    rngasseu123@gmail.com
                </a>
                </div>
            </div>
        </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#hero" className={linkClass("hero")}>Accueil</a>
        <a href="#about" className={linkClass("about")}>À propos</a>
        <a href="#skills" className={linkClass("skills")}>Compétences</a>
        <a href="#projects" className={linkClass("projects")}>Projets</a>
        <a href="#resume" className={linkClass("resume")}>CV</a>
        <a href="#contact" className={linkClass("contact")}>Contact</a>

        <button onClick={toggleTheme} className="icon-btn">
          {dark ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}