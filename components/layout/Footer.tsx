"use client";

import { useEffect, useRef } from "react";
import { ArrowUp, Code2, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = `© ${new Date().getFullYear()} Abdul Lateef`;
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="footer-name" href="#home">Abdul Lateef.</a>
          <p>AI and software engineering undergraduate focused on practical, meaningful technology.</p>
        </div>
        <div className="footer-links" aria-label="Footer social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
        <div className="footer-bottom">
          <span ref={yearRef}>© 2026 Abdul Lateef</span>
          <a className="back-top" href="#home" aria-label="Back to top">
            <ArrowUp size={16} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

