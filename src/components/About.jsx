export default function About() {
  return (
    <section id="about" className="section about-section">
      
      <h2>À propos de moi</h2>

      <div className="about-container">

        {/* PHOTO */}
        <div className="about-img">
          <img src="/moi.jpeg" alt="Rayan" />
        </div>

        {/* TEXTE */}
        <div className="about-text">
          <p>
            Salut et bienvenue sur mon site personnel dédié à ma présentation web.
            Je suis un jeune développeur Full Stack passionné par la technologie
            et animé par une grande curiosité, doté d'un apprentissage rapide.
            <br /><br />

            Dynamique, rapide et capable de m’adapter à de nouveaux environnements
            techniques sans difficulté. J’ai des connaissances en Python, JavaScript
            et C++, ainsi qu’une bonne maîtrise des outils Office et une forte
            compréhension théorique en intelligence artificielle.
            <br /><br />

            Poli, respectueux et motivé pour relever de nouveaux défis dans le
            secteur informatique.
          </p>
        </div>

      </div>
    </section>
  );
}