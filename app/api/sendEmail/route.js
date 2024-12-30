import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(request) {
   
    const { email, name } = await request.json(); 
   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    const length = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email, 
      subject: 'Welcome to Our Service!',
      text: ` 
      Hi ${name},

      Thank you for registering! To complete your registration, please verify your email by entering the following verification code:

      Verification Code: **${code}**

      Please copy and paste this code into the platform for email verification.

      Best regards,
      Essential Team
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, {status:201});
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, {status:500});
    }
  } 

