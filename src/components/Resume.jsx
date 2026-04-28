import { motion } from "framer-motion";

const timeline = [

{
year:"2023 - Présent",
title:"Team Leader — Colser",
place:"Barilla, Pedrignano (Parma)",
description:
"Responsable d’une équipe chargée du nettoyage industriel dans l’usine Barilla. Coordination, organisation des tâches et supervision terrain."
},

{
year:"2022 - Présent",
title:"Études en Ingénierie des Tecnologie Informatique",
place:"Université de Parma",
description:
"Parcours universitaire en développement logiciel, IA, systèmes et ingénierie des tecnologie informatique."
},

{
year:"2021 - 2022",
title:"Responsable Informatique",
place:"Établissement scolaire : Emmanuelle Victory Douala",
description:
"Gestion complète du parc informatique, maintenance, support utilisateurs et administration."
},

{
year:"2021 - 2022",
title:"Stage Commercial",
place:"Brasseries du Cameroun",
description:
"Stage orienté ventes, relation client et opérations commerciales."
},

{
year:"2020 - 2021",
title:"Formation Bureautique",
place:"Cyber Café",
description:
"Maîtrise complète du pack Office : Word, Excel, PowerPoint, Access."
},

{
year:"2021",
title:"Baccalauréat",
place:"Cameroun",
description:
"Diplôme obtenu."
},

{
year:"2020",
title:"Probatoire",
place:"Cameroun",
description:
"Diplôme obtenu."
}

];


export default function Resume(){

return(

<section
id="resume"
className="section"
>

<h2>Parcours & Expériences</h2>

<p className="resume-intro">
Développeur Full Stack et étudiant en ingénierie informatique avec expérience en management, informatique et projets techniques.
</p>


<div className="timeline">

{timeline.map((item,index)=>(

<motion.div
key={index}
className="timeline-item card glass"

initial={{
opacity:0,
x:-60
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.6,
delay:index*.1
}}
>

<div className="timeline-year">
{item.year}
</div>

<div className="timeline-content">
<h3>
{item.title}
</h3>

<h4>
{item.place}
</h4>

<p>
{item.description}
</p>

</div>

</motion.div>

))}

</div>


<div className="cv-actions">

<a
href="/Mon CV.pdf"
target="_blank"
className="cv-btn"
>
Voir mon CV
</a>

<a
href="/Mon CV.pdf"
download
className="cv-btn outline"
>
Télécharger CV
</a>

</div>

</section>

)

}