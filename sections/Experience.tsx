import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Intern",
    organization: "V-Empower Centre for Leadership Coaching, Shoolini University",
    date: "June 2025 – May 2026",
    status: "Completed",
    items: [
      "Analyzed program and impact assessment data.",
      "Prepared impact reports and data visualizations.",
      "Supported operational workflows and stakeholder coordination.",
      "Contributed to data-driven insights and institutional reporting.",
    ],
  },
  {
    role: "Project Pragati — ICF Coaching-Led Rural Women Entrepreneurs Development Program",
    organization: "Centre for Leadership Coaching, Shoolini University",
    date: "July 2025 – May 2026",
    status: "Completed",
    items: [
      "Participated in rural outreach and field visits.",
      "Supported stakeholder engagement and program implementation.",
      "Assisted in impact assessment and documentation.",
      "Supported program communication and coordination.",
    ],
  },
  {
    role: "Vice President — Institution's Innovation Council (IIC)",
    organization: "Shoolini University",
    date: "November 2025 – July 2028",
    status: "Ongoing",
    items: [
      "Supporting institutional innovation and entrepreneurship initiatives.",
      "Supporting startup, innovation and leadership-focused events.",
      "Coordinating with student teams and departments.",
    ],
  },
  {
    role: "Under Officer — National Cadet Corps (NCC)",
    organization: "Shoolini University",
    date: "September 2023 – March 2026",
    status: "Completed",
    items: [
      "Led cadet coordination and discipline-related activities.",
      "Participated in Army Attachment Camp and institutional training.",
      "Managed responsibilities during camps, drills and unit coordination.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-layout">
        <SectionHeading eyebrow="04 / Experience" title="Experience & Leadership" />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.role}>
              <span className="timeline-dot" />
              <div className="timeline-meta"><time>{experience.date}</time><span>{experience.status}</span></div>
              <h3>{experience.role}</h3>
              <p className="timeline-org">{experience.organization}</p>
              <ul>
                {experience.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
