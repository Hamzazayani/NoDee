const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider (e.g., 'Gmail', 'Outlook')
  auth: {
    user: 'zayanihamza94@gmail.com',      // Replace with your email address
    pass: 'dhro xfvh divu eqys'           // Replace with your email password
  }
});

// Email data
const mailOptions = {
  from: 'zayanihamza94@gmail.com', // Sender's email address
  to: 'zayanihamza94@gmail.com',   // Receiver's email address (same as sender for this example)
  subject: 'Test Email',          // Email subject
  text: 'This is a test email sent from Node.js using Nodemailer.' // Email text
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
