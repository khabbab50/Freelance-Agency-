import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

// Configure dotenv to read .env file attributes
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Enable trust proxy so express-rate-limit identifies consumer IPs correctly behind the nginx layer
app.set("trust proxy", 1);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limit: Maximum 5 submissions per IP address per hour
const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    success: false,
    error: "Too many project briefs submitted from this IP. Please try again after 1 hour or contact us on WhatsApp directly!"
  },
  standardHeaders: true,
  legacyHeaders: false
});

// health-check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// POST /api/send-email endpoint
app.post("/api/send-email", emailLimiter, async (req: express.Request, res: express.Response) => {
  const { name, email, projectType, budget, message } = req.body;

  // Validate request parameters
  if (!name || !email || !projectType) {
    return res.status(400).json({
      success: false,
      error: "Please fill in all the required fields (Name, Email, and Project Type)."
    });
  }

  // Fetch SMTP credentials lazily to avoid application crashes if undefined
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS === "your_gmail_app_password_here") {
    console.warn("⚠️ ERROR: EMAIL_USER or EMAIL_PASS environment variables are missing or default.");
    return res.status(500).json({
      success: false,
      error: "SMTP server has not been configured with a valid App Password. Please update your .env file."
    });
  }

  try {
    // 1. Create Nodemailer Transport dynamically using Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS (Port 587)
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }) + " (Dhaka Time)";

    // Format highly professional HTML email body for Agency (to khabbab.dev@gmail.com)
    const agencyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb; }
          .header { background-color: #0A0F1E; color: #ffffff; padding: 24px; text-align: center; border-bottom: 4px solid #25D366; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
          .content { padding: 30px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
          .info-label { font-weight: 600; color: #4b5563; width: 35%; font-size: 14px; }
          .info-value { color: #111827; font-size: 14px; }
          .message-box { background-color: #f9fafb; border-left: 4px solid #5B5FEF; padding: 16px; border-radius: 4px; margin-top: 10px; font-style: italic; color: #374151; white-space: pre-wrap; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⚡ New Agency Project Brief Submitted</h1>
          </div>
          <div class="content">
            <table class="info-table">
              <tr>
                <td class="info-label">Client Name:</td>
                <td class="info-value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="info-label">Client Email:</td>
                <td class="info-value"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="info-label">Project Type:</td>
                <td class="info-value"><span style="background-color: #eef2ff; color: #4f46e5; padding: 4px 8px; border-radius: 4px; font-weight: 600; font-size: 12px; text-transform: uppercase;">${projectType}</span></td>
              </tr>
              <tr>
                <td class="info-label">Budget Range:</td>
                <td class="info-value"><strong style="color: #059669;">${budget || "Not Specified"}</strong></td>
              </tr>
              <tr>
                <td class="info-label">Submitted At:</td>
                <td class="info-value" style="font-family: monospace; color: #6b7280;">${timestamp}</td>
              </tr>
            </table>
            <div style="font-weight: 600; margin-top: 20px; color: #374151;">Project Description:</div>
            <div class="message-box">${message || "No project description provided."}</div>
          </div>
          <div class="footer">
            This verification email was automatically transmitted from your Freelance Agency Landing Page website.
          </div>
        </div>
      </body>
      </html>
    `;

    // Format beautiful client auto-reply confirmation email
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb; }
          .header { background-color: #0A0F1E; color: #ffffff; padding: 24px; text-align: center; border-bottom: 4px solid #25D366; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
          .content { padding: 30px; line-height: 1.6; color: #374151; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Inquiry Received!</h1>
          </div>
          <div class="content">
            <p>Assalamu Alaikum, <strong>${name}</strong>,</p>
            <p>Thank you for submitting your project brief on our website! We have successfully received your inquiry for <strong>${projectType.toUpperCase()}</strong>.</p>
            <p>Our lead developer is already reviewing your details and estimating scope requirements. We will reach out to you with an initial proposal and consult link <strong>within the next 24 hours</strong>.</p>
            <p>If you have any extra documents or instant inquiries, reply directly to this mail or message us on WhatsApp: <a href="https://wa.me/8801733212051" style="color: #25D366; font-weight: 600; text-decoration: none;">+8801733212051</a>.</p>
            <p>Best regards,<br><strong>Freelance Agency Dev Team</strong></p>
          </div>
          <div class="footer">
            You are receiving this because you submitted a project brief on khabbab.dev
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Transmit notification email to khabbab.dev@gmail.com
    console.log(`📨 Triggering SMTP dispatch for: ${name} (${email})`);
    const info = await transporter.sendMail({
      from: `"${name} (via Website Form)" <${EMAIL_USER}>`,
      to: "khabbab.dev@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry from ${name} - Freelance Agency`,
      html: agencyHtml
    });
    console.log(`✅ Main Notification Email sent! ID: ${info.messageId}`);

    // 3. Transmit confirmation auto-reply email to client
    try {
      const clientInfo = await transporter.sendMail({
        from: `"Freelance Agency Dev Team" <${EMAIL_USER}>`,
        to: email,
        subject: `Thank You! We've Received Your Project Brief – Freelance Agency`,
        html: clientHtml
      });
      console.log(`✅ Auto-reply confirmation sent to client ${email}. ID: ${clientInfo.messageId}`);
    } catch (clientErr) {
      // Log client error but don't fail client request (notification was successfully sent)
      console.warn("⚠️ Client auto-reply failure (could be invalid/unreachable client email):", clientErr);
    }

    return res.status(200).json({ success: true, message: "Email sent!" });

  } catch (error: any) {
    console.error("❌ SMTP Nodemailer Dispatch Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to trigger SMTP transmission. Please try direct WhatsApp instead."
    });
  }
});

// Vite middleware and router setup for dual local development and static execution
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // SPA Fallback for all routing requests
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server successfully booting in ${process.env.NODE_ENV || 'development'} mode on http://0.0.0.0:${PORT}`);
  });
}

startServer();
