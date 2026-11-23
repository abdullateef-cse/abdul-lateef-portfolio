const technologies = [
  "Python",
  "C++",
  "PHP",
  "SQL",
  "MySQL",
  "TensorFlow",
  "OpenCV",
  "Scikit-learn",
  "AWS",
  "Git",
];

export default function TechStack() {
  return (
    <div className="tech-ticker" aria-label="Technology stack">
      <div className="container ticker-track">
        {technologies.map((technology) => (
          <span key={technology}>{technology}<b>✦</b></span>
        ))}
      </div>
    </div>
  );
}
