import { ArrowRight, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { featuredProjects } from '../data/projects';

const heroEvidence = [
  {
    title: '사용자 문제 정의',
    highlight: 'VOC·운영 문의와 GA4 분석',
    description: '반복 문의와 이탈 지점을 제품 문제로 구조화했습니다.',
  },
  {
    title: '제품 실행',
    highlight: 'FO·BO 정책 설계부터 QA까지',
    description: '상태·조건·예외를 정의하고 개발·디자인·운영과 협업했습니다.',
  },
  {
    title: '데이터 기반 검증',
    highlight: '평균 참여시간 1.7배 증가',
    description: '메인페이지 리뉴얼 전후 GA4 지표로 개선 결과를 확인했습니다.',
  },
];

export function PortfolioHomePage() {
  const representativeProjects = featuredProjects.slice(0, 3);
  const briefPrinciples = profile.principles.slice(0, 3);

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero__content">
            <p className="eyebrow">주니어 프로덕트 매니저</p>
            <h1 id="home-hero-title">
              사용자 행동과 운영 데이터를 바탕으로,
              <span> 복잡한 과정을 쉽게 만드는 김부경입니다.</span>
            </h1>
            <p className="home-hero__summary">
              VOC 분석 → 문제 정의 → 정책·화면 설계 → 협업·QA → 결과 검증까지 경험했습니다.
            </p>

            <div className="hero-evidence" aria-label="제품 경험 핵심 근거">
              {heroEvidence.map((evidence, index) => (
                <article key={evidence.title}>
                  <div className="hero-evidence__meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h2>{evidence.title}</h2>
                  </div>
                  <strong>{evidence.highlight}</strong>
                  <p>{evidence.description}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="primary-action" to="/work">
                대표 프로젝트 보기 <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="secondary-action" to="/about">
                경력 및 소개 보기 <UserRound aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="Works"
            title="대표 작업 3가지를 먼저 보여드립니다."
          />
          <div className="compact-grid home-featured-grid">
            {representativeProjects.map((project) => (
              <ProjectCard compact uniform key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="home-about">
          <p className="eyebrow">How I work</p>
          <h2>근거를 확인하고, 정책을 설계하고, 협업 가능한 기준으로 전달합니다.</h2>
          <div>
            {briefPrinciples.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <Link className="detail-link" to="/about">
            About 김부경 <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading-row">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <Link to="/work">
        전체 프로젝트 <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </div>
  );
}
