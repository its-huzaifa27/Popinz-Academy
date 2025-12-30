import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    // 1) Create a transporter
    // NOTE: For now, we use Ethereal (fake email) or expect ENV vars.
    // If user has gmail/etc, they should put in .env
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // 2) Define the email options
    const mailOptions = {
        from: 'Popinz Academy <popinzbakers@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html: options.message  // Can add HTML later
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

export default sendEmail;
