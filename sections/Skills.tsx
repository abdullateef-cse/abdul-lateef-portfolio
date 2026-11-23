import { Code2, Database, BrainCircuit, ChartNoAxesCombined, Cloud } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "C++", "PHP", "SQL"],
  },
  {
    icon: Database,
    title: "Web & Backend",
    skills: ["HTML", "CSS", "MySQL", "Authentication Systems", "Dashboard Development"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data & Scientific Computing",
    skills: ["Pandas", "NumPy", "Streamlit"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["AWS S3", "AWS IAM", "Boto3", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Technical Toolkit"
          description="A practical blend of software engineering, backend systems and applied machine learning."
        />
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={21} /></div>
              <h3>{title}</h3>
              <ul>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
