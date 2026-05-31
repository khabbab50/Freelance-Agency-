/*
IMPORTANT - VERCEL SETUP STEPS:
1. Go to vercel.com → Your Project → Settings → Environment Variables
2. Add Variable 1:
   Name:  EMAIL_USER
   Value: khabbab.dev@gmail.com
3. Add Variable 2:
   Name:  EMAIL_PASS  
   Value: [Your 16-digit Gmail App Password]
4. Click Save → Redeploy the project
5. Test from another device — email should arrive!

HOW TO GET GMAIL APP PASSWORD:
- Google Account → Security → 2-Step Verification → App Passwords
- Select: Mail + Other Device → Generate
- Copy the 16-character password (no spaces)
*/

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Add CORS headers manually at the top of every response
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight request: return 200 immediately
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST method, return 405 for others
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, projectType, budget, message } = req.body || {};

    // Validate all fields — if any required missing, return 400 error
    if (!name || !email || !projectType) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters. Please provide name, email, and projectType.'
      });
    }

    const EMAIL_USER = process.env.EMAIL_USER || 'khabbab.dev@gmail.com';
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        error: 'Missing EMAIL_PASS environment variable on Vercel side. Please configure environment variables in Vercel Settings.'
      });
    }

    // Use Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }) + ' (Dhaka Time)';

    // Email content for incoming project inquiries (Khabbab's dashboard notification)
    const agencyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb; }
          .header { background-color: #0A0F1E; color: #ffffff; padding: 20px; text-align: center; border-bottom: 4px solid #25D366; }
          .header h1 { margin: 0; font-size: 18px; font-weight: 700; }
          .content { padding: 24px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .info-table td { padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
          .info-label { font-weight: 600; color: #4b5563; width: 30%; font-size: 13px; }
          .info-value { color: #111827; font-size: 13px; }
          .message-box { background-color: #f9fafb; border-left: 4px solid #5B5FEF; padding: 12px; border-radius: 4px; margin-top: 8px; font-style: italic; color: #374151; white-space: pre-wrap; font-size: 13px; }
          .footer { background-color: #f9fafb; padding: 15px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Agency Project Inquiry</h1>
          </div>
          <div class="content">
            <table class="info-table">
              <tr>
                <td class="info-label">Name:</td>
                <td class="info-value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="info-label">Email:</td>
                <td class="info-value"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="info-label">Requirement:</td>
                <td class="info-value"><span style="background-color: #eef2ff; color: #4f46e5; padding: 3px 6px; border-radius: 4px; font-weight: 600; font-size: 11px;">${projectType}</span></td>
              </tr>
              <tr>
                <td class="info-label">Budget:</td>
                <td class="info-value" style="color: #059669; font-weight: 600;">${budget || 'Not Specified'}</td>
              </tr>
              <tr>
                <td class="info-label">Timestamp:</td>
                <td class="info-value" style="color: #6b7280; font-size: 12px;">${timestamp}</td>
              </tr>
            </table>
            <div style="font-weight: 600; font-size: 13px; color: #374151;">Project Message:</div>
            <div class="message-box">${message || 'No project description provided.'}</div>
          </div>
          <div class="footer">
            Submitted via Vercel Serverless Form Processor
          </div>
        </div>
      </body>
      </html>
    `;

    // Email content for auto-reply confirmation to client
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb; }
          .header { background-color: #0A0F1E; color: #ffffff; padding: 20px; text-align: center; border-bottom: 4px solid #25D366; }
          .header h1 { margin: 0; font-size: 18px; font-weight: 700; }
          .content { padding: 24px; line-height: 1.5; color: #374151; font-size: 13px; }
          .footer { background-color: #f9fafb; padding: 15px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ We received your message! - Khabbab Dev Agency</h1>
          </div>
          <div class="content">
            <p>Assalamu Alaikum, <strong>${name}</strong>,</p>
            <p>Thank you for reaching out! We have successfully received your project inquiry for <strong>${projectType.toUpperCase()}</strong> with a budget of <strong>${budget}</strong>.</p>
            <p>Our team is already reviewing your project request. We typically formulate custom solutions and get back to you <strong>within 24 hours</strong> with an initial estimate or consultation schedule.</p>
            <p>If you have any urgent attachments or want to fast-track your inquiry, feel free to reply directly to this email or message me on WhatsApp: <a href="https://wa.me/+8801733212051" style="color: #25D366; font-weight: 600; text-decoration: none;">+8801733212051</a>.</p>
            <br>
            <p>Best regards,<br><strong>Freelance Agency Dev Team</strong></p>
          </div>
          <div class="footer">
            You are receiving this because you submitted a project inquiry form on khabbab.dev
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Send incoming mail notification to khabbab.dev@gmail.com
    await transporter.sendMail({
      from: `"${name} (Freelance Inquiry)" <${EMAIL_USER}>`,
      to: 'khabbab.dev@gmail.com',
      replyTo: email,
      subject: `🚀 New Project Inquiry - [${projectType}] from ${name}`,
      html: agencyHtml,
    });

    // 2. Send professional auto-reply email to client
    try {
      await transporter.sendMail({
        from: `"Khabbab Dev Agency" <${EMAIL_USER}>`,
        to: email,
        subject: "✅ We received your message! - Khabbab Dev Agency",
        html: clientHtml,
      });
    } catch (clientErr) {
      console.warn('⚠️ Auto-reply failed to send:', clientErr);
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Serverless Mail Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
