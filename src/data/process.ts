export type WorkStep = {
  number: string;
  title: string;
  description: string;
  outputs: string;
};

export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: '데이터·VOC·인터뷰에서 반복되는 문제의 신호를 찾습니다.',
    outputs: 'GA4 · VOC 분류 · 인터뷰 · 사용성 테스트',
  },
  {
    number: '02',
    title: 'Define',
    description: '사용자, 조건, 예외, 영향도를 기준으로 문제를 구조화합니다.',
    outputs: 'Problem Statement · 우선순위 · 사용자 여정',
  },
  {
    number: '03',
    title: 'Design',
    description: '정책과 사용자 흐름을 개발 가능한 제품 요구사항으로 구체화합니다.',
    outputs: 'PRD · User Story · Policy · Wireframe',
  },
  {
    number: '04',
    title: 'Deliver',
    description: '개발·디자인과 스프린트를 운영하고 QA를 통해 출시까지 연결합니다.',
    outputs: 'Jira · Sprint · QA Scenario · Release',
  },
  {
    number: '05',
    title: 'Learn',
    description: '지표와 사용자 반응을 확인해 다음 실험과 개선 방향을 제안합니다.',
    outputs: 'Metric · VOC · Retrospective · Next Action',
  },
];
