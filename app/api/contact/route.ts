
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "abdullateef.cse@gmail.com";

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const subject = clean(body.subject, 150);
  const message = clean(body.message, 5000);
  const website = clean(body.website, 200);

  if (website) {
    return NextResponse.json(
      { error: "Unable to submit this message." },
      { status: 400 }
    );
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please complete every field." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Portfolio email delivery failed:", error);

    return NextResponse.json(
      { error: "Email delivery failed. Please use the email link instead." },
      { status: 502 }
    );
  }
}
