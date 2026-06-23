import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { compactProjects, featuredProjects } from '../data/projects';

const fitItems = [
  {
    title: '사용자 문제 발견',
    body: '데이터·VOC·인터뷰 기반으로 반복 문제와 사용 맥락을 정의합니다.',
    project: 'Printbank / NPB',
    slug: 'printbank-npb',
  },
  {
    title: '제품 구체화',
    body: '정책·상태·예외 케이스를 포함해 개발 가능한 요구사항으로 정리합니다.',
    project: 'Magic Ecole LMS',
    slug: 'magic-ecole',
  },
  {
    title: '실행 및 검증',
    body: 'FO/BO 기획, 개발 협업, 지표와 사용자 반응 확인까지 연결합니다.',
    project: 'PrintStudio',
    slug: 'print-studio',
  },
];

export function PortfolioHomePage() {
  const additional = [featuredProjects[4], featuredProjects[5], ...compactProjects];
  return <><Header /><main>
    <section className="home-hero">
      <div><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1>사용자의 막힘을 발견해<br /><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>{profile.profile[1]}</p><div className="hero-actions"><a className="primary-action" href="#featured">프로젝트 살펴보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#fit-summary">핵심 역량과 경험 보기</a></div></div>
      <div className="signal-panel"><p className="eyebrow">SIGNAL → STRUCTURE → PRODUCT</p><h2>문제의 신호를 제품 결정으로 연결합니다.</h2><div className="signal-steps"><div><span>01</span><strong>Signal</strong><p>데이터 · VOC · 인터뷰</p></div><div><span>02</span><strong>Structure</strong><p>정책 · 상태 · 우선순위</p></div><div><span>03</span><strong>Product</strong><p>화면 · 협업 · 검증</p></div></div></div>
    </section>
    <section className="impact-strip"><div><strong>1.7×</strong><p>평균 참여시간 증가</p><span>실제 측정</span></div><div><strong>14</strong><p>LMS Sprint 운영</p><span>출시·산출물</span></div><div><strong>AI + Search</strong><p>RAG 근거 확인 UX</p><span>제품 설계</span></div><div><strong>FO / BO</strong><p>사용자와 운영 흐름 설계</p><span>Product Operations</span></div></section>
    <section id="fit-summary" className="home-section fit-summary"><div className="section-heading-row"><div><p className="eyebrow">Fit Summary</p><h2>미리캔버스 Junior PM 역할과 맞닿은 경험</h2></div><a href="#featured">근거 프로젝트 보기 <ArrowRight size={17} /></a></div><div className="fit-summary-grid">{fitItems.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p><Link to={`/projects/${item.slug}`}>{item.project} <ArrowRight size={15} /></Link></article>)}</div></section>
    <section id="featured" className="home-section"><SectionTitle eyebrow="Featured Case Studies" title="문제 정의와 제품 판단이 가장 잘 드러나는 작업" href="#additional-work" label="추가 작업 보기" /><div className="featured-grid">{featuredProjects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section id="additional-work" className="home-section"><SectionTitle eyebrow="Research & Additional Work" title="연구, AI 실험, 서비스 비즈니스 경험" href="#contact" label="연락처 보기" /><div className="compact-grid">{additional.map((project) => <ProjectCard compact key={project.slug} project={project} />)}</div></section>
    <section className="home-about"><p className="eyebrow">How I work</p><h2>근거를 확인하고, 정책을 설계하고, 협업 가능한 기준으로 전달합니다.</h2><div>{profile.principles.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></article>)}</div><a className="detail-link" href="#fit-summary">핵심 역량 다시 보기 <ArrowRight size={17} /></a></section>
  </main><Footer email={profile.email} /></>;
}

function SectionTitle({ eyebrow, title, href, label }: { eyebrow: string; title: string; href: string; label: string }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><a href={href}>{label} <ArrowRight size={17} /></a></div>;
}
