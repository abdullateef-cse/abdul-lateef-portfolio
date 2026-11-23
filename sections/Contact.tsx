"use client";

import { FormEvent, useState } from "react";
import { Code2, ExternalLink, Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success" | "loading"; message: string }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus({ type: "error", message: "Please complete every field before continuing." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website }),
      });
      const result = await response.json() as { success?: boolean; configured?: boolean; error?: string };

      if (response.ok && result.success) {
        setStatus({ type: "success", message: "Your message was sent successfully." });
        form.reset();
        return;
      }

      if (response.status === 503 && result.configured === false) {
        setStatus({
          type: "error",
          message: "Secure email delivery is not configured yet. Opening a prefilled email draft instead.",
        });
      } else {
        setStatus({ type: "error", message: result.error ?? "Your message could not be sent." });
        return;
      }
    } catch {
      setStatus({
        type: "error",
        message: "The server is unavailable. Opening a prefilled email draft instead.",
      });
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="07 / Contact"
            title="Let's Build Something Meaningful."
            description="Have an opportunity, an idea or a project in mind? I'd be glad to connect and explore how we can create something valuable together."
          />
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /><span><b>Email</b>{profile.email}</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={18} /><span><b>LinkedIn</b>Connect professionally</span></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /><span><b>GitHub</b>View my work</span></a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={18} /><span><b>Phone</b>{profile.phone}</span></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="honeypot" aria-hidden="true">
            <span>Website</span>
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="field-row">
            <label><span>Name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          </div>
          <label><span>Subject</span><input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
          <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me about the opportunity or idea..." required /></label>
          {status.message ? <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p> : null}
          <button className="button button-primary" type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending…" : "Send Message"} <Mail size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
