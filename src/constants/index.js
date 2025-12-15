import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.avif";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in the Full-Stack Web Development, Frontend & AI/ML. I have hands-on experience in building scalable web applications, training AI models, and solving complex problems with efficient solutions. My goal is to leverage technology to create innovative and impactful applications.`;

export const EXPERIENCES = [
  {
    year: "04/2025 - 08/2025",
    role: "Frontend Developer Intern",
    company: "Supista",
    description: `Developing dynamic, scalable front-end components using Next.js and TypeScript for Supista.com. Built key ERP features like paginated notifications, drag-and-drop Kanban boards, Gantt charts, and advanced TanStack Table integrations. Integrated REST APIs, managed application state, and collaborated with backend and design teams.`,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "TanStack Table",
      "Metronics",
    ],
  },
  {
    year: "07/2025 - Present",
    role: "AI/ML Club Co-Lead",
    company: "Shri Mata Vaishno Devi University",
    description: `Contributed to web-based platforms for showcasing AI/ML models and visualizations. Developed dashboards and tools for supporting machine learning experiments and results sharing.`,
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Keras"],
  },
];

export const PROJECTS = [
  {
    title: "SwipeHire",
    image: project1,
    description:
      "SwipeHire automates the traditionally long and repetitive job application process using multiple AI agents. These agents collaboratively handle job discovery, eligibility matching, application submission, and status tracking, reducing manual effort for candidates and improving hiring efficiency.",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "n8n",
      "Multi-Agent Systems",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    title: "Context-Based Video Frame Interpolation",
    image: project2,
    description:
      "A deep learning-based system that generates intermediate video frames by understanding spatial and temporal context. It improves video smoothness and frame rate using context-aware neural networks.",
    technologies: [
      "Python",
      "PyTorch",
      "CNN",
      "Optical Flow",
      "Computer Vision",
    ],
  },

  {
    title: "Real-time Chat Application",
    image: project3,
    description:
      "Developed a full-stack chat app with real-time messaging, authentication, media uploads, and theme switching. Utilized WebSockets for real-time communication and deployed using Render and Cloudinary.",
    technologies: [
      "React",
      "Express",
      "Node.js",
      "MongoDB Atlas",
      "Socket.io",
      "Daisy UI",
      "Cloudinary",
      "Render",
      "Postman",
    ],
  },
  {
    title: "Real-Time Action Detection Using ML",
    image: project4,
    description:
      "A real-time action detection system utilizing machine learning to classify human movements with high accuracy. Implemented a deep learning model using TensorFlow and Keras, combined with OpenCV for real-time video analysis. The system is optimized for high performance and can be used in security and sports analytics.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MediaPipe",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Movie Recommender Using ML",
    image: project5,
    description:
      "A content-based movie recommendation system leveraging cosine similarity to suggest similar movies. Designed with a robust data pipeline using Pandas and NumPy for efficient processing. The backend API was built using Flask to handle recommendations based on user preferences.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Flask",
      "Pycharm",
      "Streamlit",
    ],
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A modern portfolio website built using React, Tailwind CSS, and Vite. Designed to showcase my skills, projects, and experiences in an interactive and visually appealing manner. Implemented animations, dark mode, and SEO optimizations for a seamless user experience.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Shri Mata Vaishno Devi University, Jammu & Kashmir, India",
  phoneNo: "+91 9005584428",
  email: "anirudhmishra112233@gmail.com",
  github: "https://github.com/anirudhxmishra",
  linkedin: "http://www.linkedin.com/in/anirudh-mishra-b84363256",
};
