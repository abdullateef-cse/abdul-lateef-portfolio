export type Project = {
  title: string;
  category: string;
  status: "Completed" | "Ongoing";
  description: string;
  outcome: string;
  technologies: string[];
  contributions: string[];
  problem: string;
  implementation: string;
  challenge: string;
  result: string;
};

export const projects: Project[] = [
  {
    title: "Project Pragati",
    category: "Full-Stack Rural Development Platform",
    status: "Completed",
    description:
      "A digital platform supporting rural leadership, mentoring and women empowerment initiatives through structured stakeholder and project workflows.",
    outcome: "Centralized stakeholder, village and volunteer workflows",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    problem: "Program activities and stakeholder information needed a structured digital workflow.",
    implementation: "Built backend modules, role-based authentication, MySQL CRUD operations and dashboard views.",
    challenge: "Coordinating multiple stakeholder and activity records within a practical full-stack system.",
    result: "The project provides a centralized platform for activity tracking and project management. Verified usage metrics are not available.",
    contributions: [
      "Developed backend modules for volunteer, village and stakeholder management.",
      "Implemented authentication, session management and role-based access.",
      "Built dynamic dashboards for activity tracking, data management and reporting.",
      "Integrated MySQL connectivity and structured CRUD operations.",
    ],
  },
  {
    title: "Coachinns.com",
    category: "AI-Integrated Coaching Platform",
    status: "Completed",
    description:
      "A coaching platform with onboarding, dashboard modules and user interaction features.",
    outcome: "Improved onboarding and platform interaction workflows",
    technologies: ["Web Development", "Platform Integration", "Testing"],
    problem: "Users needed a clear onboarding and dashboard experience for a coaching platform.",
    implementation: "Worked across platform feature integration, dashboard modules and usability testing.",
    challenge: "Connecting platform workflows while supporting debugging and usability improvements.",
    result: "Contributed to onboarding and dashboard workflows. Verified AI capabilities or performance metrics are not available.",
    contributions: [
      "Contributed to platform development and feature integration.",
      "Worked on onboarding workflows and dashboard modules.",
      "Assisted in testing, debugging and usability improvements.",
      "Collaborated on scalable enhancements and deployment workflows.",
    ],
  },
  {
    title: "Masked Face Detection System",
    category: "Computer Vision / Machine Learning",
    status: "Completed",
    description:
      "A real-time binary image classification system that predicts mask or no-mask status from webcam video input.",
    outcome: "Real-time webcam inference for mask and no-mask detection",
    technologies: ["TensorFlow", "Keras", "OpenCV"],
    problem: "Face-mask status needed to be classified from live webcam frames.",
    implementation: "Preprocessed images, detected faces with OpenCV and used a TensorFlow/Keras binary classifier for predictions.",
    challenge: "Connecting face detection and live prediction without interrupting the video workflow.",
    result: "The system performs real-time mask/no-mask prediction from webcam input. Verified accuracy metrics are not available.",
    contributions: [
      "Processed live video streams for real-time predictions.",
      "Implemented image preprocessing and face detection with OpenCV.",
      "Built and trained a binary image classification model.",
      "Connected webcam input to mask/no-mask output.",
    ],
  },
];

