const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 't9382197@gmail.com',
        pass: 'PPP123456789'
      }
    });

   
    const mailOptions = {
      from: 't9382197@gmail.com',
      to: 'ahmedyassinechaabene87@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

   
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}


sendEmail();
