import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, name, code } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: name ? 'Welcome to Our Service!' : 'Email Update Verification',
    text: name
      ? `Hi ${name},

        Thank you for registering! To complete your registration, please verify your email by entering the following verification code:

        Verification Code: **${code}**

        Please copy and paste this code into the platform for email verification.

        Best regards,  
        Essential Team`
              : `Hi,

        You recently requested to change your email. To complete the update, please verify your email by entering the following verification code:

        Verification Code: **${code}**

        Please copy and paste this code into the platform for email verification.

        Best regards,  
        Essential Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Code sent succeffully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: `Failed to send email ${error}` }, { status: 500 });
  }
}
