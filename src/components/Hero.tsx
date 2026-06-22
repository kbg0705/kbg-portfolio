import { ArrowDownRight, Download } from 'lucide-react';
import { SignalDiagram } from './SignalDiagram';

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p>
        <h1 id="hero-title">
          사용자의 막힘을 발견해
          <span>실행 가능한 제품으로 바꿉니다.</span>
        </h1>
        <p className="hero-description">
          데이터와 VOC에서 문제의 단서를 찾고, 복잡한 요구사항을 정책과 사용자 흐름으로
          구조화합니다. 개발·디자인·운영 조직과 협업하며 문제 정의부터 출시와 검증까지
          연결해 왔습니다.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            프로젝트 살펴보기
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="/resume/김부경_이력서.pdf" download>
            이력서 다운로드
            <Download size={18} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-keywords">EdTech SaaS · AI Search · E-commerce</p>
      </div>
      <SignalDiagram />
    </section>
  );
}
