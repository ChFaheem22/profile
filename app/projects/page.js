import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, FileSearch } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from './data';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'Projects',
  description:
    'Web, mobile and full-stack engineering projects — MERN, Next.js, Flutter and Python.',
};

const Project = () => {
  return (
    <div className="wrap">
      <Reveal>
        <span className="eyebrow">Selected work</span>
        <h1 className="heading">Projects</h1>
        <p className="sub">
          Production web applications, cross-platform mobile apps, and developer tooling.
        </p>
      </Reveal>

      <div className="grid">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <div className="card">
              <div className="cover">
                {project.slug === 'drivego' ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src="/drivego.png"
                      alt="DriveGo Flutter App"
                      fill
                      style={{ objectFit: 'cover', opacity: 0.85 }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(14, 16, 22, 0.9) 0%, rgba(14, 16, 22, 0.2) 100%)',
                    }} />
                    <span className="coverName" style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                      {project.name}
                    </span>
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    background: 'var(--surface-raised)',
                    backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-faint)',
                    }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border-strong)' }} />
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border-strong)' }} />
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border-strong)' }} />
                      </div>
                      <span>{project.slug}.dev</span>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                      <span className="coverName" style={{ display: 'block', marginBottom: '2px' }}>
                        {project.name}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--accent)',
                      }}>
                        {project.tools.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="coverOverlay">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coverBtn"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
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
                      <FaGithub size={16} />
                    </a>
                  )}

                  {project.hasCaseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="coverBtn"
                      aria-label="Read case study"
                    >
                      <FileSearch size={16} />
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
                      <ExternalLink size={13} />
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
                      <FaGithub size={13} />
                      {' '}GitHub
                    </a>
                  )}

                  {project.hasCaseStudy ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="link"
                    >
                      <FileSearch size={13} />
                      {' '}Case Study
                    </Link>
                  ) : (
                    <span className="link disabled">
                      <FileSearch size={13} />
                      {' '}Case study pending
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
