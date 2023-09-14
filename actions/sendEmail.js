"use server";

import React from "react";
import {Resend} from "resend";
import {validateString, getErrorMessage} from "@/lib/utils";
import ContactEmail from "@/email/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) =>
{
    const email = formData.get("emailAddress");
    const message = formData.get("emailMessage");

    if (!validateString(email, 150))
    {
        return {
            error: "Invalid Email"
        };
    }

    if (!validateString(message, 1000))
    {
        return {
            error: "Invalid Message"
        };
    }

    let data;
    try
    {
        data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: 'daustindodge@gmail.com',
            reply_to: email,
            subject: 'Inquiry from your portfolio',
            react: React.createElement(ContactEmail, {message: message, email: email})
        });
    }
    catch (error)
    {
        return {
            error: getErrorMessage(error)
        };
    }

    return {data};
}