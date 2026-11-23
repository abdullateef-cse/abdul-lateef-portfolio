import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading eyebrow="05 / Education" title="Academic Foundation" />
        <div className="education-grid">
          <article className="education-feature">
            <span>2023 — 2027</span>
            <h3>B.Tech — Computer Science and Engineering (Artificial Intelligence)</h3>
            <p>Shoolini University, Solan</p>
            <strong>Current CGPA 8.55</strong>
          </article>
          <div className="education-list">
            <article>
              <span>2022</span>
              <div><h3>Class XII</h3><p>Doon Valley Public School, Nalagarh</p></div>
              <strong>72.3%</strong>
            </article>
            <article>
              <span>2020</span>
              <div><h3>Class X</h3><p>Doon Valley Public School, Nalagarh</p></div>
              <strong>79.4%</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
