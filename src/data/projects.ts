export type ProjectId = 'npb' | 'magic-ecole' | 'tax-canvas' | 'print-studio';

export type Project = {
  id: ProjectId;
  number: string;
  service: string;
  title: string;
  tagline: string;
  problem: string;
  decision: string;
  impact: string[];
  tags: string[];
  href: string;
  variant: 'featured' | 'standard' | 'wide';
  imageSlots?: string[];
};

export const projects: Project[] = [
  {
    id: 'npb',
    number: '01',
    service: 'NPB',
    title: '인쇄 이커머스 제품 개선',
    tagline: '흩어진 운영 이슈를 제품 개선 체계로 전환하다.',
    problem:
      '회원·주문·배송·CS 기능이 개별적으로 확장되면서 상태와 운영 기준이 불명확했고, 반복적인 수작업과 커뮤니케이션 비용이 발생했습니다.',
    decision:
      'VOC와 운영 이슈를 FD와 RP 개선 백로그로 구조화하고, 영향도·긴급도·선행 관계를 기준으로 우선순위를 관리했습니다.',
    impact: ['메인페이지 평균 참여시간 1.7배 증가', '백오피스 운영 처리시간 30% 단축'],
    tags: ['Product Strategy', 'GA4', 'FO/BO', 'Policy', 'QA'],
    href: '/projects/npb',
    variant: 'featured',
    imageSlots: ['문제 및 백로그', '제품 화면', '지표 또는 결과'],
  },
  {
    id: 'magic-ecole',
    number: '02',
    service: 'Magic Ecole',
    title: '교육 SaaS LMS 리뉴얼',
    tagline: '반복 개발이 필요했던 권한과 콘텐츠 구조를 확장 가능한 정책으로 재설계하다.',
    problem:
      '고정된 권한 구조와 낮은 콘텐츠 재사용성으로 인해 새로운 운영 요구가 생길 때마다 개발 의존도가 높았습니다.',
    decision:
      '전역 권한과 강의 내부 권한을 분리하고, 사용자 정의 역할과 콘텐츠 라이브러리 구조를 설계했습니다.',
    impact: ['14개 Sprint 운영', '기획팀 업무 수행률 90%'],
    tags: ['SaaS', 'LMS', 'Permission', 'Scrum', 'Figma'],
    href: '/projects/magic-ecole',
    variant: 'standard',
  },
  {
    id: 'tax-canvas',
    number: '03',
    service: 'Tax Canvas',
    title: '생성형 AI 세무 검색서비스',
    tagline: 'AI가 답을 생성하는 시간을 신뢰할 수 있는 탐색 경험으로 바꾸다.',
    problem:
      'AI 분석 시간이 길고 결과의 신뢰성을 즉시 판단하기 어려웠으며, 여러 쟁점과 결과를 비교하는 과정도 복잡했습니다.',
    decision:
      '부분 결과, 쟁점 이동, 재분석, 판례·예규 근거 확인이 이어지는 사용자 흐름을 설계했습니다.',
    impact: ['RAG 기반 검색 및 근거 확인 UX 설계', '개발 착수 가능한 제품 요구사항 완성'],
    tags: ['Generative AI', 'RAG', 'Search UX', 'Trust'],
    href: '/projects/tax-canvas',
    variant: 'standard',
  },
  {
    id: 'print-studio',
    number: '04',
    service: 'PrintStudio',
    title: '신규 인쇄 이커머스 구축',
    tagline: '주문 파일 오류와 반복 운영 업무를 사용자 가이드와 자동화로 줄이다.',
    problem:
      '주문 파일 오류로 CS가 반복되고, 주문 데이터를 내부 시스템으로 옮기는 운영 업무가 수작업으로 이루어졌습니다.',
    decision: '상품별 작업 파일 가이드와 주문·인트라넷 연동 구조를 설계했습니다.',
    impact: ['파일 가이드 이용률 50% 이상', '운영 처리시간 단축'],
    tags: ['E-commerce', 'Automation', 'UX Writing', 'Operations'],
    href: '/projects/print-studio',
    variant: 'wide',
  },
];

export function findProject(projectId: string | undefined) {
  return projects.find((project) => project.id === projectId);
}
