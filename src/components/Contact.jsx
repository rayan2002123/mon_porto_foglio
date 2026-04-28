import { useState } from "react";

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

const sendMessage=async(e)=>{
e.preventDefault();

const response=await fetch(
"http://localhost:5000/contact",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
}
);

const data=await response.json();

alert(data.message);
};

return(

<section
id="contact"
className="section"
>

<h2>Contactez-moi</h2>

<p className="contact-subtitle">
Disponible pour stages, freelance, collaborations et opportunités tech.
</p>


<div className="contact-wrapper">

{/* LEFT CARD */}
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


{/* FORM */}
<motion.form
onSubmit={sendMessage}
className="contact-form glass"

initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:.6}}
>

<input
name="name"
placeholder="Votre nom"
onChange={handleChange}
/>

<input
name="email"
placeholder="Votre email"
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Votre message..."
rows="7"
onChange={handleChange}
/>

<button type="submit">
Envoyer le message
</button>

</motion.form>

</div>

</section>

)

}