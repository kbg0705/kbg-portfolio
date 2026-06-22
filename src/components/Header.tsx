import { Copy, Download } from 'lucide-react';
import { projects } from '../data/projects';

const email = 'portfolio@example.com';

export function Header() {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="홈으로 이동">
        PM Portfolio
      </a>
      <nav className="project-nav" aria-label="프로젝트 바로가기">
        {projects.map((project) => (
          <a key={project.id} href={`#${project.id}`}>
            {project.title.replace(' 개선', '').replace(' 리뉴얼', '')}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="icon-button" onClick={handleCopyEmail} aria-label="이메일 복사">
          <Copy size={17} />
        </button>
        <a className="resume-button" href="/resume.pdf" download>
          <Download size={17} />
          Resume
        </a>
      </div>
    </header>
  );
}
