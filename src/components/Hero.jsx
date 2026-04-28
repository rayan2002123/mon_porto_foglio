import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Je construis des expériences web modernes.</h1>
        <p>Frontend/Backend • UI/UX • Full Stack • Jeux</p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn-primary">
            Travaillons ensemble
          </a>

          <a href="/Mon CV.pdf" download className="btn-primary">
            Télécharger mon CV
          </a>

        </div>
      </motion.div>
    </section>
  );
}