import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
{
title:"Marvel Store",

images:[
"/marvelstore1.png",
"/marvelstore2.png",
"/marvelstore3.png",
"/marvelstore4.png",
"/marvelstore5.png",
"/marvelstore6.png",
"/marvelstore7.png",
"/marvelstore8.png",
],

url:"https://marvelstore10.web.app",
github:
"https://github.com/rayan2002123/marvelstoreprojet",

description:
"Application e-commerce complète avec paiements Stripe et PayPal.",

features:[
"Catalogue produits",
"Checkout sécurisé",
"Node backend",
"MongoDB"
],

stack:[
"React",
"Node",
"MongoDB",
"Stripe",
"PayPal"
]
},

{
title:"Marvel Tickets",

images:[
"/marveltickets1.png",
"/marveltickets2.png",
"/marveltickets3.png",
"/marveltickets4.png",
"/marveltickets5.png",
"/marveltickets6.png",
],

url:"https://marveltickets.azurewebsites.net",
github:
"https://github.com/rayan2002123/marveltickets",

description:
"Plateforme d'achat de billets bus urbains et extra-urbains.",

features:[
"Réservation",
"API REST",
"C# backend",
"Responsive"
],

stack:[
"C#",
".NET",
"REST API"
]
}
];

export default function Projects(){

return(
<section id="projects" className="section">

<h2>Mes Projets</h2>

<div className="projects-grid">

{projects.map((project,index)=>(

<ProjectCard
key={index}
project={project}
/>

))}

</div>
</section>
)
}


function ProjectCard({project}){

const [current,setCurrent]=useState(0)

const nextSlide=()=>{
setCurrent(
(current+1)%project.images.length
)
}

const prevSlide=()=>{
setCurrent(
(current-1+project.images.length)%project.images.length
)
}

return(

<motion.div
className="project-card glass"
whileHover={{y:-8}}
>

<div className="project-image">

<img
src={project.images[current]}
alt={project.title}
/>

<button
onClick={prevSlide}
className="slider-btn left"
>
‹
</button>

<button
onClick={nextSlide}
className="slider-btn right"
>
›
</button>

<div className="dots">
{project.images.map((_,i)=>(
<span
key={i}
className={
i===current
? "dot active-dot"
: "dot"
}
onClick={()=>setCurrent(i)}
></span>
))}
</div>

</div>

<h3>{project.title}</h3>

<p className="project-desc">
{project.description}
</p>

<ul className="project-features">
{project.features.map((item,i)=>(
<li key={i}>
✔ {item}
</li>
))}
</ul>

<div className="tech-stack">
{project.stack.map((tech,i)=>(
<span
key={i}
className="tech-badge"
>
{tech}
</span>
))}
</div>

<div className="project-buttons">

<a
href={project.url}
target="_blank"
rel="noreferrer"
className="project-btn"
>
Live Demo
</a>


<a
href={project.github}
target="_blank"
rel="noreferrer"
className="project-btn github-btn"
>
<FaGithub/>
Code Source
</a>

</div>

</motion.div>

)
}