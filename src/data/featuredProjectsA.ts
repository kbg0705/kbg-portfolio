import type { Project } from '../types/project';
import { makePlaceholder as image } from './imagePlaceholders';

export const featuredProjectsA: Project[] = [
  {
    slug: 'printbank-npb', order: 1, tier: 'featured', service: 'Printbank / NPB', company: '프린트뱅크', cardMeta: '프린트뱅크 · Product Manager · 2025–현재', category: ['Product', 'E-commerce'], title: '인쇄 이커머스 제품 개선',
    tagline: '흩어진 운영 이슈를 우선순위가 있는 제품 개선 체계로 전환했습니다.', period: '2025.03–현재', role: '인쇄 이커머스 서비스 기획 · PM',
    contribution: 'FO·BO 기획 · 정책 및 예외 케이스 · 데이터 검수 · QA · 운영 이슈 개선', status: '기획·개발·QA 병행', tools: ['Figma', 'Jira', 'GA4', 'Google Sheets', 'SQL/DB 구조 협의'], tags: ['FO/BO', 'Product Operations', 'Policy', 'GA4'],
    problem: '회원·주문·배송·CS 기능의 상태 체계와 운영 기준이 불명확해 운영자가 수작업으로 공백을 보완했습니다.', decision: '운영 피드백을 FD 문제 정의와 RP 개선 과제로 구조화하고 상태·조건·예외·우선순위를 정책으로 만들었습니다.',
    impact: [{ value: '1.7×', label: '메인페이지 평균 참여시간 증가', description: '1분 14초에서 2분 8초로 증가', type: 'measured' }, { value: 'FO·BO', label: '개선 과제 개발·QA 연결', description: '회원·주문·배송·CS 관련 과제', type: 'delivered' }],
    detailPageEnabled: true, thumbnail: { ...image('cover', '비식별화된 제품 개선 시스템', 'FD·RP 백로그와 FO·BO 정책 연결을 보여주는 이미지'), isConfidential: true },
  },
  {
    slug: 'magic-ecole', order: 2, tier: 'featured', service: 'Magic Ecole', company: 'Magic Ecole', cardMeta: 'Magic Ecole · Product Owner · 2023–2024', category: ['Product', 'SaaS'], title: '교육 SaaS LMS 리뉴얼',
    tagline: '반복 개발이 필요했던 권한과 콘텐츠 구조를 확장 가능한 제품 정책으로 재설계했습니다.', period: '2023.07–2024.02', role: 'LMS 서비스 기획 · PO', contribution: 'LMS FO·BO 기획 · 권한 및 콘텐츠 정책 · Figma 화면정의서 · Jira Sprint 운영', status: '기획 완료 · 단계적 개발',
    tools: ['Figma', 'Jira', 'Confluence', 'Google Docs'], tags: ['LMS', 'Back Office', 'Permission', 'Scrum'], problem: '고정된 권한 체계와 낮은 콘텐츠 재사용성 때문에 새로운 운영 요구마다 추가 개발이 필요했습니다.', decision: '전역 권한과 강의 내부 권한을 분리하고 Custom Role과 콘텐츠 라이브러리를 설계했습니다.',
    impact: [{ value: '14', label: 'Sprint 운영', description: 'Jira 기반 개발 협업', type: 'delivered' }, { value: '90%', label: '기획팀 업무 수행률', description: '준비 상태와 착수 기준 개선', type: 'measured' }, { value: 'NIPA', label: '유망 SaaS 지원 사업 통과 기여', description: '외부 지원 선정', type: 'recognition' }],
    detailPageEnabled: true, thumbnail: image('cover', '권한과 콘텐츠 구조', '권한 매트릭스와 LMS 계층 구조를 보여주는 이미지'),
  },
  {
    slug: 'tax-canvas', order: 3, tier: 'featured', service: 'Tax Canvas', company: 'Tax Canvas', cardMeta: 'Tax Canvas · PM · 2024', category: ['Product', 'AI & Search'], title: '생성형 AI 세무 검색서비스 기획',
    tagline: 'AI의 답변을 기다리는 시간을 근거를 탐색하고 판단하는 경험으로 바꿨습니다.', period: '2024.04–2024.07', role: '서비스 기획 팀장 · PM', contribution: '제품 흐름 · AI 상태 UX · 검색·근거 구조 · 협업 프로세스', status: 'v1.1 요구사항 완료 · 개발 착수', tools: ['Figma', 'Jira', 'Confluence', 'RAG 구조 협의'], tags: ['Generative AI', 'RAG', 'Search UX', 'Trust'],
    problem: '긴 분석 시간, 복수 쟁점 비교, 결과 신뢰성 문제가 전문가의 판단 흐름을 끊었습니다.', decision: '부분 결과, 쟁점 이동, 재분석, 판례·예규 근거 확인을 하나의 검토 흐름으로 설계했습니다.',
    impact: [{ value: 'v1.1', label: '개발 착수 가능한 요구사항 완료', description: '검색·근거·AI 상태 UX 포함', type: 'delivered' }, { value: '외부 선정', label: '증빙 가능한 창업 지원 선정', description: '확인 가능한 항목만 표기', type: 'recognition' }],
    detailPageEnabled: true, thumbnail: image('cover', 'AI 답변과 법적 근거 연결', '쟁점·분석 결과·근거 문서 연결 화면'),
  },
];
