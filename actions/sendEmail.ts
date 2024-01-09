"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const receiverEmail = process.env.EMAIL;
  const resendEmailDev = process.env.RESEND_EMAIL_DEV;
  if (!validateString(senderEmail, 100) || !validateString(message, 1000)) {
    return {
      error: "Invalid input",
    };
  }
  if (!receiverEmail || !resendEmailDev) {
    return { error: "Invalid environment variables" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: `My Portfolio <${resendEmailDev}>`,
      to: receiverEmail,
      subject: "Message from your portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  return {
    data,
  };
};
