import { useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projectCategories, type ProjectCategoryFilter } from '../data/projectCategories';
import { projects } from '../data/projects';

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategoryFilter>('All');
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter)), [filter]);

  return (
    <>
      <Header />
      <main className="page-shell">
        <header className="page-hero">
          <p className="eyebrow">All Work</p>
          <h1>문제 유형과 제품 단계에 따라 프로젝트를 탐색하세요.</h1>
          <p>문제 정의부터 제품 판단, 실행 결과까지 프로젝트별 핵심 내용을 한눈에 확인할 수 있습니다.</p>
        </header>
        <div className="filter-bar" aria-label="프로젝트 필터">
          {projectCategories.map((category) => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <section className="work-list">
          <div className="work-grid">
            {filtered.map((project) => (
              <ProjectCard compact uniform key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}
