import { NextRequest, NextResponse } from "next/server";

const recipient = "abdullateef.cse@gmail.com";

function clean(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(typeof body.name === "string" ? body.name : null, 100);
  const email = clean(typeof body.email === "string" ? body.email : null, 254);
  const subject = clean(typeof body.subject === "string" ? body.subject : null, 150);
  const message = clean(typeof body.message === "string" ? body.message : null, 5000);
  const website = clean(typeof body.website === "string" ? body.website : null, 200);

  if (website) return NextResponse.json({ error: "Unable to submit this message." }, { status: 400 });
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email delivery is not configured.", configured: false },
      { status: 503 },
    );
  }

  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Email delivery failed. Please use the email link instead." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Email delivery is temporarily unavailable." }, { status: 502 });
  }
}
