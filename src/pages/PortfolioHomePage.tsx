import { ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { careerSummary } from '../data/career';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const workProjects = [...projects].sort((first, second) => first.order - second.order);
const resumeActions = ['문제보다 먼저 증거를 확인합니다.', '정상 흐름보다 예외와 책임 범위를 먼저 설계합니다.', '출시 여부와 측정 결과를 분리해 표현합니다.'];

export function PortfolioHomePage() {
  return <><Header /><main>
    <section className="home-hero home-hero--simple">
      <div><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1>사용자의 막힘을 발견해<br /><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>데이터와 VOC를 제품 요구사항으로 구조화하고, 출시 이후 반응까지 확인합니다.</p><div className="hero-actions"><a className="primary-action" href="#work">프로젝트 보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#about">이력 보기</a></div></div>
    </section>
    <section id="work" className="home-section home-work"><SectionTitle eyebrow="Work" title="미리캔버스 Junior PM 역할과 맞닿은 경험" /><div className="work-project-grid">{workProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section id="about" className="home-section home-resume"><div className="section-heading-row"><div><p className="eyebrow">About</p><h2>문제를 제품 요구사항으로 바꾸는 PM입니다.</h2></div><a className="secondary-action" href="#resume-summary">이력서 보기</a></div><div className="resume-layout"><article className="resume-profile"><h3>Profile</h3>{profile.profile.map((item) => <p key={item}>{item}</p>)}</article><article id="resume-summary" className="resume-career"><h3>Career</h3><ol>{careerSummary.map((entry) => <li key={`${entry.company}-${entry.period}`}><strong>{entry.company}</strong><span>{entry.role}</span><em>{entry.period}</em><p>{entry.summary}</p></li>)}</ol></article><article><h3>Education</h3><ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Certifications · Tools</h3><ul>{[...profile.certifications, profile.tools.join(' · ')].map((item) => <li key={item}>{item}</li>)}</ul></article></div><div className="resume-principles">{resumeActions.map((item) => <p key={item}>{item}</p>)}</div></section>
  </main><Footer email={profile.email} /></>;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><a href="#about">이력 보기 <ArrowRight size={17} /></a></div>;
}
