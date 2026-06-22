import { useEffect, useState } from 'react';
import { DesktopOnlyNotice } from '../components/DesktopOnlyNotice';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ImpactMetrics } from '../components/ImpactMetrics';
import { ProductInterest } from '../components/ProductInterest';
import { ProjectCard } from '../components/ProjectCard';
import { WorkProcess } from '../components/WorkProcess';
import { projects } from '../data/projects';

const email = 'kimbu0705@gmail.com';

export function HomePage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['work', 'process', 'about']
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        } else if (window.scrollY < 120) {
          setActiveSection('top');
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopyEmail = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2400);
  };

  return (
    <>
      <DesktopOnlyNotice />
      <div className="app-shell">
        <Header email={email} activeSection={activeSection} onCopyEmail={handleCopyEmail} />
        <main>
          <Hero />
          <ImpactMetrics />
          <section className="work-section" id="work" aria-labelledby="work-title">
            <div className="section-intro">
              <p className="eyebrow">Selected Work</p>
              <h2 id="work-title">Selected Work</h2>
              <p>문제를 발견한 근거와, 제품으로 전환한 판단을 중심으로 정리했습니다.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <WorkProcess />
          <ProductInterest />
        </main>
        <Footer email={email} onCopyEmail={handleCopyEmail} />
        <div className="toast" role="status" aria-live="polite" data-visible={toastVisible}>
          이메일 주소를 복사했습니다.
        </div>
      </div>
    </>
  );
}
import { ArrowUpRight } from 'lucide-react';
import { DesktopOnly } from '../components/DesktopOnly';
import { Header } from '../components/Header';
import { projects } from '../data/projects';

export function HomePage() {
  return (
    <>
      <DesktopOnly />
      <div className="app-shell" id="top">
        <Header />
        <main>
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Junior Product Manager Application</p>
              <h1>인쇄, 교육, AI 서비스를 실행 가능한 제품 흐름으로 설계합니다.</h1>
              <p className="hero-description">
                복잡한 운영 구조를 사용자 경험으로 번역하고, 문제 정의부터 출시 범위까지
                제품의 다음 단계를 구체화해 온 기획 포트폴리오입니다.
              </p>
            </div>
            <aside className="profile-panel" aria-label="지원자 핵심 역량">
              <span>Focus</span>
              <strong>Product Planning</strong>
              <p>FO/BO 개선, 신규 서비스 MVP, AI 검색 경험, 인쇄 워크플로우</p>
            </aside>
          </section>

          <section className="section-heading" aria-labelledby="projects-title">
            <p className="eyebrow">Selected Work</p>
            <h2 id="projects-title">주요 프로젝트</h2>
          </section>

          <section className="project-list" aria-label="프로젝트 목록">
            {projects.map((project, index) => (
              <article className="project-card" id={project.id} key={project.id}>
                <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <div className="project-meta">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a className="detail-link" href={`/projects/${project.id}`} aria-label={`${project.title} 상세 보기`}>
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
