/* eslint-disable prettier/prettier */
// import { ConfigService } from '@nestjs/config';
// import * as sgMail from '@sendgrid/mail';

// // const configuration = new ConfigService();

// // sgMail.setApiKey(
// //   // process.env.SENDGRID_API_KEY,
// //   "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"
// //   // configuration.get<string>('SENDGRID_API_KEY')
// // );

// export async function sendEmail(to, subject, text, html) {
//   const msg = {
//     to,
//     from: { email: "usmankhalid17248@gmail.com", name: "Innotech AI" },
//     // from: {
//     //   email: configuration.get<string>('SENDGRID_SENDER_EMAIL'), name: configuration.get<string>('SENDGRID_SENDER_NAME')

//     // },
//     subject,
//     text,
//     html,
//   };

//   try {
//     await sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//     await sgMail.send(msg);
//     return 'Email sent successfully';
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return 'Failed to send email: ' + error;
//   }
// }

// export async function envFile() {
//   // if (configuration) {
//   //   const sendGridKey = configuration.get<string>('SENDGRID_API_KEY')
//   //   if (sendGridKey) {
//   //     return sendGridKey
//   //   }
//   //   else {
//   //     return "Not able to access key"
//   //   }
//   // }
//   // else {
//   //   return "Not able to configuration"
//   // }
//   const sendGridApi = process.env.SENDGRID_API_KEY
//   if (sendGridApi) {
//     return sendGridApi
//   }
//   else {
//     return "Not able to access env"
//   }
// }
