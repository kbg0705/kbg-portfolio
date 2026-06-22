import { Link } from 'react-router-dom';
import { careerSummary } from '../data/career';

export function CareerSummary() {
  return (
    <section id="career-summary" className="career-summary" aria-labelledby="career-summary-title">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Career Summary</p>
          <h2 id="career-summary-title">제품을 기획하고, 운영하고, 개선해 왔습니다.</h2>
        </div>
      </div>
      <ol className="career-timeline">
        {careerSummary.map((entry) => (
          <li key={`${entry.company}-${entry.period}`}>
            <div className="career-timeline__period">{entry.period}</div>
            <div className="career-timeline__body">
              <h3>{entry.company}</h3>
              <p className="career-timeline__role">{entry.role}</p>
              <p>{entry.summary}</p>
              <div className="career-projects" aria-label={`${entry.company} 연결 프로젝트`}>
                {entry.projects.map((project) => (
                  <Link key={project.slug} to={`/projects/${project.slug}`}>{project.label}</Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
