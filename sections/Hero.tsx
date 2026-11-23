import Image from "next/image";
import { ArrowDownRight, Code2, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span /> Open to opportunities</div>
          <p className="eyebrow hero-eyebrow">Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">Building Intelligent Systems. Solving Real Problems.</p>
          <p className="hero-intro">
            Computer Science and Artificial Intelligence undergraduate focused on
            developing practical software solutions, exploring machine learning and
            building technology with meaningful real-world applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work <ArrowDownRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s Connect
            </a>
          </div>
          <div className="hero-stats" aria-label="Profile highlights">
            <div><strong>8.55</strong><span>Current OGPA</span></div>
            <div><strong>3+</strong><span>Applied projects</span></div>
            <div><strong>2027</strong><span>Graduation year</span></div>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrait of Abdul Lateef">
          <div className="portrait-orbit" />
          <div className="portrait-frame">
            <Image
              src="/images/abdul_lateef.png"
              alt="Abdul Lateef - AI and Software Developer"
              width={800}
              height={800}
              priority
              sizes="(max-width: 760px) 82vw, (max-width: 1100px) 42vw, 460px"
            />
          </div>
          <div className="portrait-note">
            <span />
            AI &amp; Software · Student Portfolio
          </div>
        </div>
      </div>
    </section>
  );
}
