import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsA } from '../featuredProjectsA';

export const printbankDetail: ProjectDetail = {
  slug: 'printbank-npb',
  overview: '회원, 주문, 배송, 문의 기능이 개별적으로 확장되며 상태 체계와 운영 기준이 불명확해졌습니다. VOC와 운영 이슈를 제품 과제로 구조화하고 정책과 예외 케이스를 개발 가능한 수준으로 정의했습니다.',
  context: '요청이 여러 문서와 채널에 분산돼 같은 문제의 원인과 개발 상태를 파악하기 어려웠습니다. 운영자가 경험으로 보완하던 규칙을 제품 정책으로 옮기는 것이 핵심이었습니다.',
  executiveSummary: {
    problem: '운영자가 불명확한 정책과 기능 사이의 공백을 수작업으로 보완했습니다.',
    decision: '운영 피드백을 FD 문제 정의와 RP 개선 과제로 구조화하고 상태·조건·예외·우선순위를 정책으로 만들었습니다.',
    outcome: '회원·주문·배송·CS 과제를 개발과 QA로 연결했고 메인페이지 평균 참여시간을 약 1.7배 높였습니다.',
  },
  evidence: [
    { label: 'CS 및 운영 문의', description: '반복 문의를 기능·정책·운영 이슈로 분류했습니다.' },
    { label: 'FO·BO 기능 진단', description: '사용자 화면과 운영 화면의 정보 단절을 확인했습니다.' },
    { label: '업무 흐름 분석', description: '상태값과 수작업 판단 구간을 추적했습니다.' },
    { label: 'GA4', description: '접속과 참여 지표를 개선 전후로 비교했습니다.' },
  ],
  feedbackBacklog: {
    title: 'From Feedback to Product Backlog',
    subtitle: '운영 피드백을 제품 개선 체계로 전환했습니다.',
    body: '여러 채널에 흩어져 있던 운영 피드백과 개발 요청을 문제 단위로 분류했습니다. 각 문제를 개선 과제와 연결하고 기획·개발·QA 상태를 함께 관리해, 운영과 개발이 동일한 기준으로 우선순위와 진행 상황을 확인할 수 있도록 했습니다.',
    flow: ['운영 피드백', '문제 정의', '개선 과제', '개발 상태'],
    image: {
      src: 'images/projects/printbank-npb/02-integrated-backlog.png',
      alt: '운영 피드백을 문제 정의와 개선 과제, 개발 상태로 연결한 Printbank NPB 통합 백로그',
      caption: '운영 피드백–개선 과제–개발 상태를 연결한 통합 백로그',
      type: 'artifact',
      aspectRatio: '16:10',
      isConfidential: true,
      placeholderTitle: 'Printbank NPB 통합 백로그',
      placeholderDescription: '운영 피드백을 FD 문제 정의와 RP 개선 과제, 개발 진행 상태로 연결한 비식별화 자료',
    },
    secondaryCaption: '회사 내부 정보 보호를 위해 실제 데이터는 비식별화하고 일부 내용을 재구성했습니다.',
  },
  keyQuestion: '운영자의 경험에 의존하던 업무 규칙을 어떻게 제품 정책으로 옮길 수 있을까?',
  decisions: [
    { number: '01', title: '운영 피드백을 제품 백로그로 전환', evidence: '피드백과 개발 요청이 여러 채널의 개별 건으로 분산되어 반복 문제와 우선순위를 비교하기 어려웠습니다.', decision: 'FD를 문제 정의 단위로 사용하고, 각 FD를 실행 가능한 RP 개선 과제로 연결했습니다.', specification: '운영 피드백, 문제 요약, RP 개선 과제, 개발 및 QA 진행 상태를 같은 구조에서 추적했습니다.', effect: '운영·기획·개발이 동일한 기준으로 문제와 진행 상태를 확인하고 우선순위를 논의할 수 있게 했습니다. 위 통합 백로그 섹션에서 이 구조를 확인할 수 있습니다.' },
    { number: '02', title: '예외 케이스를 먼저 정의', evidence: '회원, 주문, 문의, 배송 기능마다 구두 판단이 필요한 상황이 많았습니다.', decision: '조건, 상태값, 오류 상황, 운영 권한을 기능별 정책으로 분리했습니다.', specification: '회원 승인·반려, 비밀번호 초기화, 문의 연동, 중복 주문, 합배송, 로그 정책을 설계했습니다.', effect: '개발자의 추가 해석을 줄이고 운영 기준을 통일했습니다.' },
    { number: '03', title: '메인페이지 역할 재정의', evidence: '주문 기능 중심 구조로 신규 사용자의 탐색과 상담 진입이 어려웠습니다.', decision: '상품 탐색, 제작 안내, 상담 진입을 핵심 역할로 정의했습니다.', specification: '배너, 팝업, 콘텐츠, 상담 CTA 우선순위를 재설계했습니다.', effect: '평균 참여시간이 1분 14초에서 2분 8초로 증가했습니다.' },
  ],
  artifacts: [image('artifact', 'FO·BO 정책서', '상태값·예외 케이스 예시'), image('artifact', '화면정의서와 QA', 'Figma 화면정의와 QA 시나리오'), image('outcome', '개선 현황 보고서', '과제 상태와 완료 범위')],
  collaboration: ['운영 담당자와 반복 문의 및 수작업 판단 구간을 확인했습니다.', '개발자와 상태값·데이터 항목·예외 처리 기준을 조율했습니다.', '화면정의서와 QA 시나리오를 개발 착수 기준으로 사용했습니다.'],
  outcomes: featuredProjectsA[0].impact,
  learnings: ['체류시간은 사용자의 목적 수행 여부와 함께 판단해야 합니다.', '정상 흐름보다 예외와 책임 범위를 먼저 확인해야 합니다.', '기획 완료와 실제 출시 성과를 구분해 표현해야 합니다.'],
  confidentialityNote: '회사 내부 정보 보호를 위해 실제 화면과 정책 문서는 비식별화하거나 재구성해 제공합니다.', images: [], previousProject: undefined, nextProject: 'magic-ecole',
};
