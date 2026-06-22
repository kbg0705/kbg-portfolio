import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { compactProjects } from '../compactProjects';

export const visangAidtDetail: ProjectDetail = {
  slug: 'visang-aidt',
  overview: 'AI 디지털교과서 기반 인쇄 서비스 기획에 참여하고, 공공기관 제출용 기술검증결과서와 사용자·운영 매뉴얼 작성에 참여했습니다.',
  context: '공공 프로젝트 특성상 기능 정의뿐 아니라 문서 산출물, QA 기준, 반복 검증 과정이 함께 관리되어야 했습니다.',
  executiveSummary: {
    problem: '디지털교과서의 출력 니즈와 반복 테스트를 안정적으로 지원할 구조가 필요했습니다.',
    decision: '인쇄 서비스 흐름과 문서 산출물을 정리하고 테스트케이스 기반 QA와 Selenium 자동화 검증을 도입했습니다.',
    outcome: '기획 산출물과 서비스 매뉴얼, QA 기준을 개발 및 제출 과정에 연결했습니다.',
  },
  evidence: [
    { label: '기능 요구사항', description: 'AIDT 환경에서 필요한 인쇄 흐름과 사용자·운영 조건을 정리했습니다.' },
    { label: '제출 산출물', description: '공공기관 제출용 기술검증결과서와 매뉴얼 작성에 참여했습니다.' },
    { label: '테스트케이스', description: '반복 확인이 필요한 기능을 테스트케이스로 분리했습니다.' },
    { label: '자동화 검토', description: 'Selenium을 활용해 반복 QA 일부를 자동화할 수 있는 구조를 마련했습니다.' },
  ],
  keyQuestion: '공공 프로젝트의 기능 요구와 검증 기준을 어떻게 개발 가능한 산출물로 연결할 수 있을까?',
  decisions: [
    { number: '01', title: '인쇄 서비스 흐름을 기능 단위로 정리', evidence: '사용자 출력 흐름과 운영 확인 항목이 함께 관리되어야 했습니다.', decision: '기능, 사용자 조건, 운영 확인 항목을 분리해 정리했습니다.', specification: '인쇄 진입, 옵션, 결과 확인, 예외 상황을 기준으로 문서화했습니다.', effect: '기획·개발·QA가 같은 단위로 기능을 확인할 수 있게 했습니다.' },
    { number: '02', title: '공공기관 제출 산출물 작성 참여', evidence: '서비스 설명과 기술 검증 결과를 외부 제출 형식에 맞춰 정리해야 했습니다.', decision: '기술검증결과서와 사용자·운영 매뉴얼 작성에 참여했습니다.', specification: '기능 설명, 검증 항목, 사용 절차, 운영 기준을 문서 산출물로 정리했습니다.', effect: '기능 구현뿐 아니라 제출과 검수 단계까지 이어지는 기준을 만들었습니다.' },
    { number: '03', title: '테스트케이스 기반 QA와 Selenium 자동화', evidence: '반복 확인 항목이 많아 수동 QA만으로는 누락 위험이 있었습니다.', decision: '테스트케이스를 만들고 반복 검증 일부에 Selenium 자동화를 적용했습니다.', specification: '검증 절차, 기대 결과, 자동화 대상과 제외 대상을 구분했습니다.', effect: '반복 QA를 구조화했으며, 별도 절감 수치는 주장하지 않았습니다.' },
  ],
  artifacts: [
    image('artifact', 'AIDT 인쇄 기능 정의', '권장 비율 16:10 · 인쇄 흐름과 조건을 보여주는 문서'),
    image('artifact', '기술검증결과서', '권장 비율 4:3 · 공공기관 제출 산출물의 비식별화 예시'),
    image('artifact', 'QA 테스트케이스', '권장 비율 16:10 · 테스트 항목과 기대 결과 구조'),
  ],
  collaboration: ['서비스 요구사항을 기능과 검증 항목으로 나눠 정리했습니다.', '문서 산출물 작성 과정에서 기획·개발·QA 기준을 맞췄습니다.', '자동화 가능 영역과 수동 확인이 필요한 영역을 구분했습니다.'],
  outcomes: compactProjects[0].impact,
  learnings: ['공공 프로젝트에서는 기능 정의와 제출 산출물의 일관성이 중요합니다.', 'QA는 실행 전 테스트 단위와 기대 결과를 먼저 합의해야 합니다.', '자동화 효과는 실제 측정 전까지 정성적 개선으로만 표현해야 합니다.'],
  confidentialityNote: '공공 프로젝트 및 회사 내부 정보 보호를 위해 실제 문서와 화면은 비식별화하거나 placeholder로 제공합니다.',
  images: [],
  previousProject: 'gachon-metaverse-campus',
};
