const Project = () => {
  const project = [
    {
      name: "Car Rental System",
      description:
        "Developed a complete database-driven system to manage vehicle rentals, customer records, and booking operations. Designed the ERD and relational schema using MySQL, and explored a NoSQL alternative with MongoDB for flexible data handling. Streamlined workflows for tracking availability, scheduling, and returns.",
      tools: ["MySQL", "MongoDB"],
      link: "N/A",
    },
    {
      name: "Online Service Provider",
      description:
        "Built a full-stack web application that connects users with local service providers. Key features include user authentication, service listings, real-time booking, and role-based dashboards for customers and providers. Designed a scalable backend and implemented responsive frontend interfaces for seamless interaction.",
      tools: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: (
        <a
          href="https://frontend-woad-beta-94.vercel.app/"
          target="_blank"
          className="link"
        >
          https://frontend-woad-beta-94.vercel.app/
        </a>
      ),
    },
    {
      name: "Blog Web Application",
      description:
        "Developed a modern blog web application using React and Next.js, focused on clean design, responsive layouts, and optimized performance. Designed the interface with accessibility and smooth navigation in mind, ensuring consistency across devices.",
      tools: ["HTML", "CSS", "React.js", "Next.js"],
      link: (
        <a
          href="https://blog-phi-blush-60.vercel.app/"
          target="_blank"
          className="link"
        >
          https://blog-phi-blush-60.vercel.app/
        </a>
      ),
    },
    {
      name: "DriveGo – Car Rental Platform",
      description:
        "A full-featured mobile car rental ecosystem built with Flutter. DriveGo solves the friction of traditional rental services by offering real-time vehicle availability, seamless booking flows, and secure identity verification.",
      tools: ["Flutter", "Dart", "Firebase Authentication", "Cloudinary"],
      link: (
        <a
          href="https://github.com/ChFaheem22/flutter.git"
          target="_blank"
          className="link"
        >
          GitHub Repository
        </a>
      ),
    },
  ];
  return (
    <div className="projects">
      <h1 className="heading">My Projects</h1>
      <div className="project-grid">
        {project.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Tools:</strong> {project.tools.join(", ")}
            </p>
            <p>
              <strong>Link:</strong> {project.link}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
