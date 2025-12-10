"use server"


import nodemailer from "nodemailer"

export const sendWelcomeMail = async (email: string) => {

    try {
        const transporter = nodemailer.createTransport({
            host: "smtppro.zoho.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.FINANCE_3WB_USER,
                pass: process.env.FINANCE_3WB_PASS,
            },
        });
    
        const welcomeEmail = {
            from: `Finance @ 3wb.club <${process.env.FINANCE_3WB_USER}>`,
            to: email, // Dynamic recipient email address
            subject: "Welcome to 3WB P2P Fleet Finance",
            html: `
                <p>Hi there,</p>

                <p>Your have successfully registered to 3WB P2P Fleet Finance. You can now start financing your fleet and earn interest on your investments.</p>

                <p>Thank you for trusting us to manage your financed fleet, and as always, stay safe!</p>

                <p>Warm regards,<br/>3wb.club</p>
            `,
        };
        const result = await transporter.sendMail(welcomeEmail);
        return result;
    } catch (error) {
        console.log(error)
    }

}


