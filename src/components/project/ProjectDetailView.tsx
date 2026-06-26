import { ArrowLeft, ArrowRight, List } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Project, ProjectDetail, ProjectImage } from '../../types/project';
import { ConfidentialityNotice } from '../common/ConfidentialityNotice';
import { ImagePlaceholder } from '../common/ImagePlaceholder';

export const detailSections = [
  'summary',
  'context',
  'evidence',
  'key-decisions',
  'feedback-backlog',
  'decisions',
  'artifacts',
  'collaboration',
  'outcomes',
  'learnings',
] as const;

const sectionLabels: Record<(typeof detailSections)[number], string> = {
  summary: '핵심 요약',
  context: '문제 맥락',
  evidence: '발견 근거',
  'key-decisions': '핵심 의사결정',
  'feedback-backlog': '백로그',
  decisions: '제품 결정',
  artifacts: '산출물',
  collaboration: '협업',
  outcomes: '성과',
  learnings: '회고',
};

const outcomeLabels = {
  measured: '실제 측정',
  delivered: '출시·산출물',
  recognition: '외부 선정',
  simulated: 'AI 예측·시뮬레이션',
};

export function ProjectDetailView({
  project,
  detail,
  active,
  onOpen,
}: {
  project: Project;
  detail: ProjectDetail;
  active: string;
  onOpen: (image: ProjectImage) => void;
}) {
  const artifacts = detail.artifacts.filter((image) => image.src);
  const hasFeedbackBacklog = Boolean(detail.feedbackBacklog?.image.src);
  const hasKeyDecisions = Boolean(detail.keyDecisions?.length);
  const overview = [
    ['Period', project.period],
    ['Role', project.role],
    ['소속', project.affiliation ?? '개인 프로젝트'],
    ['Status', project.status],
  ];

  return (
    <>
      <header className="detail-hero detail-hero--renewed">
        <Link to="/work" className="back-link"><ArrowLeft size={17} /> 전체 프로젝트</Link>
        <div className="detail-hero__grid">
          <div>
            <p className="eyebrow">Project {String(project.order).padStart(2, '0')} · {project.category.join(' · ')}</p>
            <p className="detail-service">{project.service}</p>
            <h1>{project.title}</h1>
            <p className="detail-tagline">{project.tagline}</p>
            <div className="detail-contribution">
              <span>My contribution</span>
              <p>{project.contribution}</p>
            </div>
          </div>
          {project.thumbnail?.src ? <ImagePlaceholder image={project.thumbnail} onOpen={() => onOpen(project.thumbnail!)} /> : null}
        </div>
      </header>

      <section className="project-facts" aria-label="프로젝트 개요">
        {overview.map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}
      </section>

      <div className={`detail-layout${hasKeyDecisions ? ' detail-layout--key-decisions' : ''}`}>
        <nav className="detail-toc" aria-label="상세 목차">
          <span>Contents</span>
          {detailSections
            .filter((id) => id !== 'feedback-backlog' || hasFeedbackBacklog)
            .filter((id) => id !== 'key-decisions' || hasKeyDecisions)
            .filter((id) => id !== 'artifacts' || artifacts.length > 0)
            .map((id) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}><i />{sectionLabels[id]}</a>)}
        </nav>

        <div className="detail-content">
          <Section id="summary" eyebrow="Case Summary" title="문제에서 결과까지">
            <div className="case-summary">
              <article className="case-summary__problem"><span>Problem</span><p>{detail.executiveSummary.problem}</p></article>
              <article><span>Decision</span><p>{detail.executiveSummary.decision}</p></article>
              <article><span>Outcome</span><p>{detail.executiveSummary.outcome}</p></article>
            </div>
          </Section>

          <Section id="context" eyebrow="Why this problem" title="제품이 풀어야 했던 구조적 문제">
            <div className="reading-column"><p>{detail.overview}</p><p>{detail.context}</p></div>
          </Section>

          <Section id="evidence" eyebrow="Evidence" title="문제를 발견한 근거">
            <div className="evidence-grid">
              {detail.evidence.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.label}</h3><p>{item.description}</p></article>)}
            </div>
          </Section>

          {hasKeyDecisions ? (
            <Section id="key-decisions" eyebrow="Key Decisions" title="핵심 의사결정">
              <div className="key-decision-grid">
                {detail.keyDecisions!.map((item, index) => (
                  <article key={item.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <Fact label="문제" text={item.problem} />
                    <Fact label="판단" text={item.judgment} />
                    <Fact label="결정" text={item.decision} />
                  </article>
                ))}
              </div>
            </Section>
          ) : null}

          {hasFeedbackBacklog && detail.feedbackBacklog ? (
            <Section id="feedback-backlog" eyebrow="From feedback to backlog" title={detail.feedbackBacklog.subtitle}>
              <div className="backlog-feature">
                <div className="backlog-feature__copy">
                  <h3>{detail.feedbackBacklog.title}</h3>
                  <p>{detail.feedbackBacklog.body}</p>
                  <div className="backlog-flow" aria-label="통합 백로그 구조화 단계">
                    {detail.feedbackBacklog.flow.map((step) => <span key={step}>{step}</span>)}
                  </div>
                </div>
                <figure className="backlog-figure">
                  <ImagePlaceholder image={detail.feedbackBacklog.image} onOpen={() => onOpen(detail.feedbackBacklog!.image)} />
                  <figcaption>
                    <strong>{detail.feedbackBacklog.image.caption}</strong>
                    {detail.feedbackBacklog.secondaryCaption ? <span>{detail.feedbackBacklog.secondaryCaption}</span> : null}
                  </figcaption>
                </figure>
              </div>
            </Section>
          ) : null}

          <blockquote className="key-question"><span>Key Question</span><p>{detail.keyQuestion}</p></blockquote>

          <Section id="decisions" eyebrow="Product Decisions" title="근거를 제품 결정으로 전환한 과정">
            <div className="decision-list">
              {detail.decisions.map((item) => (
                <article className="decision-item decision-item--renewed" key={item.number}>
                  <b>{item.number}</b>
                  <div className="decision-item__body">
                    <h3>{item.title}</h3>
                    <div className="decision-takeaway"><span>Decision</span><p>{item.decision}</p></div>
                    <div className="decision-flow">
                      <Fact label="Evidence" text={item.evidence} />
                      <Fact label="Product Specification" text={item.specification} />
                      <Fact label="Effect" text={item.effect} />
                    </div>
                  </div>
                  {item.image?.src ? <ImagePlaceholder image={item.image} onOpen={() => onOpen(item.image!)} /> : null}
                </article>
              ))}
            </div>
          </Section>

          {artifacts.length > 0 ? (
            <Section id="artifacts" eyebrow="From policy to product" title="정책과 산출물">
              <div className="artifact-grid">
                {artifacts.map((image) => <figure key={image.placeholderTitle}><ImagePlaceholder image={image} onOpen={() => onOpen(image)} /><figcaption>{image.caption}</figcaption></figure>)}
              </div>
            </Section>
          ) : null}

          <Section id="collaboration" eyebrow="Collaboration & Delivery" title="협업과 실행">
            <ol className="text-list">{detail.collaboration.map((item) => <li key={item}>{item}</li>)}</ol>
          </Section>

          <Section id="outcomes" eyebrow="Outcome" title="성과를 유형별로 구분했습니다">
            <div className="outcome-grid">
              {detail.outcomes.map((item) => <article key={item.label} data-type={item.type}><span>{outcomeLabels[item.type]}</span><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.description}</p></article>)}
            </div>
          </Section>

          <Section id="learnings" eyebrow="What I learned" title="한계와 다음 검증">
            <ul className="text-list">{detail.learnings.map((item) => <li key={item}>{item}</li>)}</ul>
          </Section>

          {detail.confidentialityNote ? <ConfidentialityNotice>{detail.confidentialityNote}</ConfidentialityNotice> : null}

          <nav className="project-navigation" aria-label="프로젝트 이동">
            {detail.previousProject ? <Link to={`/projects/${detail.previousProject}`}><ArrowLeft /> 이전</Link> : <span />}
            <Link to="/work"><List /> 전체</Link>
            {detail.nextProject ? <Link to={`/projects/${detail.nextProject}`}>다음 <ArrowRight /></Link> : <span />}
          </nav>
        </div>
      </div>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="detail-section"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</section>;
}

function Fact({ label, text }: { label: string; text: string }) {
  return <div><span>{label}</span><p>{text}</p></div>;
}
