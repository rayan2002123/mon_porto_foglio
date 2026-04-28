require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
service:'gmail',
auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}
});

app.post('/contact', async(req,res)=>{

try{
const {name,email,message}=req.body;

await transporter.sendMail({
from:email,
to:process.env.EMAIL_USER,
subject:`Message portfolio de ${name}`,
text:`
Nom: ${name}
Email: ${email}
Message: ${message}
`
});

res.status(200).json({
success:true,
message:'Message envoyé'
});

}catch(error){
console.error(error)
res.status(500).json({error:'Erreur envoi'})
}

})

app.listen(5000,()=>{
console.log('Server running port 5000');
})