// 'use server';

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendContactForm(formData: { name: string; email: string; message: string }) {
//   try {
//     const { name, email, message } = formData;

//     const { data, error } = await resend.emails.send({
//       from: 'Contact Form ', 
//       to: 'sambhufirst11@gmail.com', 
//       replyTo: email,
//       subject: `New Contact Request from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     });

//     if (error) {
//       return { success: false, error: error.message };
//     }

//     return { success: true, data };
//   } catch (error) {
//     return { success: false, error: 'Internal server error' };
//   }
// }