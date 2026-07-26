import Link from 'next/link';
import { ExternalLink, FileSearch } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from './data';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'Projects',
  description:
    'Web, mobile and AI-assisted projects — MERN, Next.js, Flutter and Python.',
};

const Project = () => {
  return (
    <div className="wrap">
      <Reveal>
        <span className="eyebrow">SELECTED WORK</span>
        <h1 className="heading">Projects</h1>
        <p className="sub">
          A mix of web, mobile and AI-assisted tools — spanning MERN, Next.js,
          Flutter and Python.
        </p>
      </Reveal>

      <div className="grid">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <div className="card">
              <div
                className="cover"
                style={{ background: project.grad }}
              >
                <span className="coverName">{project.name}</span>

                <div className="coverOverlay">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coverBtn"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coverBtn"
                      aria-label="GitHub repository"
                    >
                      <FaGithub size={17} />
                    </a>
                  )}

                  {project.hasCaseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="coverBtn"
                      aria-label="Read case study"
                    >
                      <FileSearch size={17} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="body">
                <p className="tagline">{project.tagline}</p>
                <p className="desc">{project.description}</p>

                <div className="tags">
                  {project.tools.map((tool) => (
                    <span className="tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="cardLinks">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <ExternalLink size={14} />
                      {' '}Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <FaGithub size={14} />
                      {' '}GitHub
                    </a>
                  )}

                  {project.hasCaseStudy ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="link"
                    >
                      <FileSearch size={14} />
                      {' '}Case Study
                    </Link>
                  ) : (
                    <span className="link disabled">
                      <FileSearch size={14} />
                      {' '}Case study coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Project;