const express = require("express");
const app = express();
const path = require("path");
const env = require('dotenv');
const nodemailer = require('nodemailer');
const body_parser = require('body-parser');
const cors = require('cors');
env.config();
app.use(express.static(path.join(__dirname, "assets")));
app.use(body_parser.json())
app.use(body_parser.urlencoded({
    extended: true
}));
app.use(cors());
app.post("/contact", (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });
    console.log(req.body);
    const mailOptions = { // sender address
        to: 'nodemailersignup@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: `<p>${req.body.email}</p><br><p>${req.body.message}<br> Thanks ${req.body.name}</p>` // plain text body
    };
    const revertOptions = { // sender address
        to: `${req.body.email}`, // list of receivers
        subject: "<h1>Thanks For your Review!</h1>", // Subject line
        html: `<p>Dear ${req.body.name},<br> Thanks for reviewing my portfolio , will revert you as soon as notice your mail <br> Thanks and Regards <br> Somya Gupta</p>` // plain text body
    };

    transporter.sendMail(mailOptions, (err, infoin) => {
        if (err)
            res.status(501).send({
                "success": false,
                "error": err
            })
        else {
            transporter.sendMail(revertOptions, (err, infoout) => {
                if (err)
                    res.status(501).send({
                        "success": false,
                        "error": err
                    })
                else {
                    res.status(202).send({
                        "success": true,
                        "infomation for in coming mail": infoin,
                        "information for in outgoing mail": infoout
                    })
                }
            });
        }
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log("App listening on ", process.env.PORT || 3000);
})