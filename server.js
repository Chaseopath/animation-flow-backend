const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Allow CORS from your frontend domain
const frontendUrl = process.env.FRONTEND_URL || 'https://sandybrown-salamander-182939.hostingersite.com';
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
    console.log('Received contact form submission:', req.body);
    
    // Validate request body
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      console.log('Validation failed:', { name, email, company, message });
      return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
    }

    // Send email to yourself
    console.log('Attempting to send email...');
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
    console.log('Email sent successfully');

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error details:', {
      error: error.message,
      stack: error.stack,
      body: req.body
    });
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
