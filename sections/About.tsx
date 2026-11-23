import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <SectionHeading eyebrow="01 / About" title="A Little About Me" />
        <div className="about-copy">
          <p className="about-lead">
            I am a Computer Science and Artificial Intelligence undergraduate developing
            practical skills across software engineering, backend systems and applied AI.
          </p>
          <p>
            I am currently pursuing B.Tech Computer Science and Engineering
            (Artificial Intelligence) at Shoolini University. My work spans full-stack
            development, authentication and dashboard workflows, structured data handling,
            and machine learning with Python.
          </p>
          <p>
            Alongside technical work, I contribute to institutional innovation,
            leadership and rural development initiatives, where coordination,
            documentation and stakeholder engagement are as important as code.
          </p>
          <div className="about-facts">
            <div><GraduationCap size={20} /><span><b>Shoolini University</b>B.Tech CSE (AI) · 2027</span></div>
            <div><MapPin size={20} /><span><b>{profile.location}</b>India</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
