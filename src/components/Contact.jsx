import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
FaEnvelope,
FaPhoneAlt,
FaGithub,
FaMapMarkerAlt
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact(){

const [form,setForm]=useState({
name:"",
email:"",
message:""
});

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const sendMessage=(e)=>{
e.preventDefault();

emailjs.send(
"service_z323vpy",
"template_q02rtik",
form,
"xIyHQZiN1wTOyU4Vw"
)
.then(()=>{
alert("Message envoyé avec succès ✅");

setForm({
name:"",
email:"",
message:""
});
})
.catch((error)=>{
console.error(error);
alert("Erreur lors de l'envoi");
});
};

return(
<section id="contact" className="section">

<h2>Contactez-moi</h2>

<p className="contact-subtitle">
Disponible pour stages, freelance, collaborations et opportunités tech.
</p>

<div className="contact-wrapper">

<motion.div
className="contact-info glass"
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:.6}}
>

<h3>Informations</h3>

<a
href="mailto:rngasseu123@gmail.com"
className="contact-item"
>
<FaEnvelope/>
rngasseu123@gmail.com
</a>

<a
href="mailto:nestorrayanteddy.ngasseunwotcheu@studenti.unipr.it"
className="contact-item"
>
<FaEnvelope/>
Email Université
</a>

<a
href="tel:+393792182036"
className="contact-item"
>
<FaPhoneAlt/>
+39 379 218 2036
</a>
<a href="https://wa.me/393792182036">
WhatsApp
</a>

<div className="contact-item">
<FaMapMarkerAlt/>
Italy, Parma
</div>

<a
href="https://github.com/rayan2002123"
target="_blank"
rel="noreferrer"
className="contact-item"
>
<FaGithub/>
GitHub Profile
</a>

</motion.div>


<motion.form
onSubmit={sendMessage}
className="contact-form glass"
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:.6}}
>

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Votre nom"
/>

<input
name="email"
value={form.email}
onChange={handleChange}
placeholder="Votre email"
/>

<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Votre message..."
rows="7"
/>

<button type="submit">
Envoyer le message
</button>

</motion.form>

</div>

</section>
);

}