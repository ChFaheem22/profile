import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, caseStudies } from '../data';

export function generateStaticParams() {
  return projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const study = caseStudies[params.slug];

  if (!study) return {};

  return {
    title: study.title,
    description: study.tagline,
  };
}

const CaseStudyPage = ({ params }) => {
  const study = caseStudies[params.slug];

  if (!study) return notFound();

  return (
    <div className="wrap">
      <div className="caseHero">
        <Link href="/projects" className="back">
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <span className="eyebrow">CASE STUDY</span>

        <h1 className="heading">{study.title}</h1>

        <p className="sub">{study.tagline}</p>

        <div className="caseMeta">
          <div className="metaItem">
            <div className="k">Role</div>
            <div className="v">{study.role}</div>
          </div>

          <div className="metaItem">
            <div className="k">Stack</div>
            <div className="v">{study.stack.join(', ')}</div>
          </div>
        </div>
      </div>

      <div className="caseBody">
        <h2>The problem</h2>
        <p>{study.problem}</p>

        <h2>The approach</h2>
        <p>{study.solution}</p>

        <h2>Key features</h2>
        <ul>
          {study.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <h2>Challenges</h2>
        <p>{study.challenges}</p>

        {study.testing && (
          <>
            <h2>Testing</h2>
            <p>{study.testing}</p>
          </>
        )}

        <h2>Lessons learned</h2>
        <p>{study.lessons}</p>

        <div className="caseLinks">
          {study.demo && (
            <a
              href={study.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              <ExternalLink size={16} />
              {' '}Live Demo
            </a>
          )}

          {study.github && (
            <a
              href={study.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              <FaGithub size={16} />
              {' '}GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;