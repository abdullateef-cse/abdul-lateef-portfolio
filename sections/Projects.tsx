import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected Work"
          description="Applied development projects across full-stack systems and computer vision."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-preview project-preview-${index + 1}`}>
                <span className="project-number">0{index + 1}</span>
                <span className="project-preview-label">Project visual unavailable</span>
                <div className="project-graphic" aria-hidden="true">
                  <div className="mock-sidebar" />
                  <div className="mock-header" />
                  <div className="mock-chart" />
                  <div className="mock-panel" />
                  <div className="mock-row" />
                </div>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <b>{project.status}</b>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-outcome"><b>Outcome</b>{project.outcome}</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <details>
                  <summary>View project details <ArrowUpRight size={16} /></summary>
                  <div className="case-study-grid">
                    <div><b>Problem</b><p>{project.problem}</p></div>
                    <div><b>Implementation</b><p>{project.implementation}</p></div>
                    <div><b>Engineering challenge</b><p>{project.challenge}</p></div>
                    <div><b>Result</b><p>{project.result}</p></div>
                    <div className="case-study-contributions">
                      <b>Contributions</b>
                      <ul>
                        {project.contributions.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
