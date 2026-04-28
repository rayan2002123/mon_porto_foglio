import {
FaGithub,
FaEnvelope,
FaArrowUp
} from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

<div className="footer-content">

<div className="footer-brand">
<h2>NGASSEU NWOTCHEU</h2>

<p>
Développeur Full Stack • Software Engineer • AI Enthusiast
</p>
</div>


<div className="footer-links">

<a href="#hero">
Accueil
</a>

<a href="#projects">
Projets
</a>

<a href="#resume">
CV
</a>

<a href="#contact">
Contact
</a>

</div>


<div className="footer-social">

<a
href="https://github.com/rayan2002123"
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>

<a href="mailto:rngasseu123@gmail.com">
<FaEnvelope/>
</a>

<a href="#hero">
<FaArrowUp/>
</a>

</div>

</div>

<div>"Built with React • Designed by Rayan"</div>
<div className="footer-bottom">
© 2026 NGASSEU NWOTCHEU — Tous droits réservés.
</div>

</footer>

)

}