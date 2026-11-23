import { Shield, Lightbulb, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Leadership() {
  return (
    <section id="leadership" className="section leadership-section">
      <div className="container leadership-grid">
        <SectionHeading
          eyebrow="06 / Beyond Code"
          title="Leadership & Initiatives"
          description="Technical growth strengthened through service, coordination and institutional leadership."
        />
        <div className="leadership-cards">
          <article><Shield size={22} /><h3>NCC Under Officer</h3><p>Cadet coordination, discipline, camps and Army Attachment Camp participation.</p></article>
          <article><Lightbulb size={22} /><h3>IIC Vice President</h3><p>Supporting innovation, entrepreneurship and student-led institutional initiatives.</p></article>
          <article><Users size={22} /><h3>Community Coordination</h3><p>Field engagement and stakeholder support across rural development programs.</p></article>
        </div>
      </div>
    </section>
  );
}
