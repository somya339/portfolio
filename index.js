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
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });
    console.log(req.body);
    const mailOptions = {
        from: `${req.body.email}`, // sender address
        to: 'nodemailersignup@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: `<p>${req.body.message}<br> Thanks ${req.body.name}</p>` // plain text body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            res.status(501).send({
                "success": false,
                "error": err
            })
        else {
            res.status(202).send({
                "success": true,
                "info": info
            })
        }
    });
})

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
})
app.listen(process.env.PORT || 3000, () => {
    console.log("App listening on ", process.env.PORT || 3000);
})