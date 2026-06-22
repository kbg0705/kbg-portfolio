export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
  impact: string;
};

export const projects: Project[] = [
  {
    id: 'npb-print-commerce',
    title: 'NPB 인쇄 이커머스 FO·BO 개선',
    subtitle: '주문 전환과 운영 효율을 함께 개선한 인쇄 커머스 고도화',
    period: '2023',
    role: 'Product Planning / Backoffice UX',
    tags: ['E-commerce', 'FO/BO', 'Operation'],
    summary:
      '프론트 주문 흐름과 백오피스 처리 단계를 함께 점검해 고객 주문 경험과 내부 운영 속도를 개선했습니다.',
    impact: '주문 입력 오류 감소, 운영자 확인 단계 단축, 상품 관리 구조 정비',
  },
  {
    id: 'magic-ecole-lms',
    title: 'Magic Ecole LMS 리뉴얼',
    subtitle: '학습자와 운영자의 핵심 흐름을 재정의한 LMS 개편',
    period: '2022',
    role: 'Service Planning / UX Research',
    tags: ['LMS', 'Renewal', 'Education'],
    summary:
      '기존 학습 관리 경험의 복잡도를 낮추고 강의 탐색, 수강, 관리 흐름을 재구성했습니다.',
    impact: '메뉴 구조 단순화, 수강 상태 가시성 개선, 운영 관리 화면 정리',
  },
  {
    id: 'tax-canvas-ai-search',
    title: 'Tax Canvas 생성형 AI 세무 검색서비스',
    subtitle: '전문 세무 정보를 대화형으로 탐색하는 AI 검색 서비스',
    period: '2024',
    role: 'AI Product Planning',
    tags: ['AI Search', 'Tax', 'RAG'],
    summary:
      '세무 질의의 맥락을 보존하며 신뢰 가능한 답변 구조와 출처 확인 경험을 설계했습니다.',
    impact: '질의 유형 정의, 답변 신뢰 요소 설계, MVP 정보 구조 수립',
  },
  {
    id: 'printstudio-build',
    title: 'PrintStudio 신규 구축',
    subtitle: '인쇄 상품 제작과 주문을 연결하는 신규 서비스 설계',
    period: '2024',
    role: 'Product Owner / UX Planning',
    tags: ['New Product', 'Print', 'Workflow'],
    summary:
      '인쇄 상품 선택부터 제작 옵션 설정, 주문 접수까지 이어지는 신규 제품 경험을 구축했습니다.',
    impact: 'MVP 범위 정의, 상품 옵션 정책 수립, 제작 흐름 와이어프레임 작성',
  },
  {
    id: 'aidt-print-service',
    title: 'AIDT 기반 인쇄 서비스 기획',
    subtitle: '디지털 교과 환경과 실물 인쇄 수요를 잇는 서비스 기획',
    period: '2025',
    role: 'Product Strategy',
    tags: ['AIDT', 'Print Service', 'Strategy'],
    summary:
      'AIDT 활용 맥락에서 교사와 학습자가 필요로 하는 출력, 제작, 배포 경험을 탐색했습니다.',
    impact: '사용 시나리오 도출, 서비스 기회 영역 정의, 초기 정책 방향 정리',
  },
];
