const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Allow CORS from your frontend domain
const frontendUrl = process.env.FRONTEND_URL || 'https://your-domain.com';
app.use(cors({
  origin: frontendUrl
}));
app.use(express.json());

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'askchasewalters@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Send email to yourself
    await transporter.sendMail({
      from: 'AutoConvert.ai <askchasewalters@gmail.com>',
      to: 'askchasewalters@gmail.com',
      subject: 'New Contact Form Submission',
      text: `New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}`
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for your interest! Our team will contact you shortly.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
