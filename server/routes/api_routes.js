
const router = require('express').Router();
const nodemailer = require("nodemailer");
require('dotenv').config()

// POST - CONTACT FORM

router.post('/contact', async (req, res) => {

    try {
        console.log('---req.body---')
        console.log(req.body) 
            
        console.log("connecting to send email ", process.env.CONTACT_FORM_HOST_NAME );
        //begin nodemailer code found below
        //https://nodemailer.com/about/
        const transporter = nodemailer.createTransport({
          host: process.env.CONTACT_FORM_HOST_NAME,
          port: process.env.CONTACT_FORM_HOST_PORT,
          secure: true,
          auth: {
            user: process.env.CONTACT_FORM_HOST_USER,
            pass: process.env.CONTACT_FORM_HOST_PASSWORD
          }
        });        

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.CONTACT_FORM_SEND_FROM, // sender address
            to: process.env.CONTACT_FORM_SEND_TO, // list of receivers
            subject: process.env.CONTACT_FORM_SEND_SUBJECT, // Subject line
            //text: "Hello world?", // plain text body
            text: `New request \n
                First Name: ${req.body.firstname}\n
                Last Name: ${req.body.lastname}\n 
                Email: ${req.body.email}\n
                Company: ${req.body.company}\n
                Message: ${req.body.message}\n `
            //html: "<b>Hello world?</b>", // html body
        });
    
        console.log("Message sent: %s", info.messageId);    
        res.status(200).json("Thanks. We'll be in contact, soon.");  
    }
    catch (err) {
        console.error('error ', err);
        res.status(500).send({ error: err })
    }
})

module.exports = router