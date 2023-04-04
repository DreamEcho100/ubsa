import { z } from "zod";

import nodemailer from "nodemailer";

import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const generalRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(2),
        // subject: z.string().min(2),
        text: z.string().min(3),
      })
    )
    .mutation(async ({ input }) => {
      const EMAIL_SMTP_PORT = Number(env.EMAIL_SMTP_PORT);
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: env.EMAIL_HOST, // "smtp.gmail.com",
        port: EMAIL_SMTP_PORT, // 587,
        secure: EMAIL_SMTP_PORT === 465, // true for 465, false for other ports
        auth: {
          user: env.EMAIL_USER, // "your_email@gmail.com", // your email address
          pass: env.EMAIL_PASSWORD, // "your_email_password", // your email password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      /*
      // send mail with defined transport object
      const mailOptions = {
        from: '"Your Name" <your_email@gmail.com>', // sender address
        to: "recipient_email@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Message sent: %s", info.messageId);
        }
      // });
			*/

      const mailOptions = {
        from: `"${input.name}" <${input.email}>`, // "sender_email@general.com",
        to: env.EMAIL_USER,
        // subject: input.subject, // "Test Email",
        text: input.text, // "This is a test email sent from Node.js",
      };

      const sendEmail = await new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve("Email sent: " + info.response);
          }
        });
      });

      return sendEmail;
    }),
});
