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
        message: z.string().min(3),
      })
    )
    .mutation(async ({ input }) => {
      const EMAIL_SMTP_PORT = Number(env.EMAIL_SMTP_PORT);
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: env.EMAIL_HOST,
        port: EMAIL_SMTP_PORT, // EMAIL_SMTP_PORT,
        secure: EMAIL_SMTP_PORT === 465,
        auth: {
          user: env.EMAIL_USER,
          pass: env.EMAIL_PASSWORD,
        },
        tls: { rejectUnauthorized: false },
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: env.EMAIL_USER,
        sender: `"${input.name}" <${input.email}>`, // sender address
        to: env.EMAIL_USER, // list of receivers
        subject: `New message from "${input.name}" <${input.email}> on the ubsa.io contact form`, // Subject line
        text: input.message, // plain text body
        html: `<b>${input.message}</b>`, // html body
      });

      return { success: true };
    }),
});
