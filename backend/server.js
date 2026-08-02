import express from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // max 5 requests per minute per user
    message: {
        success: false,
        message: "Too many requests, please try again later."
    }
});

app.post('/send-email', limiter, async (req, res) => {
    const { name, email, subject, phone, message } = req.body;

        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9\s-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        return res.status(400).json({ success: false, message: "Invalid name" });
    }

    if (!phoneRegex.test(phone)) {
        return res.status(400).json({ success: false, message: "Invalid phone" });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (!subject || subject.trim() === "") {
    return res.status(400).json({ success: false, message: "Subject required" });
}
    if (!message || message.trim() === "") {
    return res.status(400).json({ success: false, message: "Message is required" });
}

    try {
         const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: `
            Name: ${name},
            Email: ${email},
            Phone: ${phone},

            Message: 
            ${message}
            `
        };
        
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false,
                             message:"Somthing went wrong please try again later" })
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
