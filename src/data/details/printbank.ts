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
  keyQuestion: '운영자의 경험에 의존하던 업무 규칙을 어떻게 제품 정책으로 옮길 수 있을까?',
  decisions: [
    { number: '01', title: '운영 피드백을 제품 백로그로 전환', evidence: '문의와 개발 요청이 개별 건으로 관리돼 반복 문제와 우선순위를 비교하기 어려웠습니다.', decision: '기능 진단 결과를 FD와 RP 과제로 연결했습니다.', specification: '문제, 사용자, 원인, 영향 화면, 개선 방향, 개발 상태를 동일한 구조로 기록했습니다.', effect: '운영·기획·개발이 같은 기준으로 문제와 진행 상태를 확인했습니다.', image: { ...image('decision', 'FD·RP 개선 백로그', '문제 구조화와 상태 관리 기준을 보여주는 비식별화 이미지'), isConfidential: true } },
    { number: '02', title: '예외 케이스를 먼저 정의', evidence: '회원, 주문, 문의, 배송 기능마다 구두 판단이 필요한 상황이 많았습니다.', decision: '조건, 상태값, 오류 상황, 운영 권한을 기능별 정책으로 분리했습니다.', specification: '회원 승인·반려, 비밀번호 초기화, 문의 연동, 중복 주문, 합배송, 로그 정책을 설계했습니다.', effect: '개발자의 추가 해석을 줄이고 운영 기준을 통일했습니다.' },
    { number: '03', title: '메인페이지 역할 재정의', evidence: '주문 기능 중심 구조로 신규 사용자의 탐색과 상담 진입이 어려웠습니다.', decision: '상품 탐색, 제작 안내, 상담 진입을 핵심 역할로 정의했습니다.', specification: '배너, 팝업, 콘텐츠, 상담 CTA 우선순위를 재설계했습니다.', effect: '평균 참여시간이 1분 14초에서 2분 8초로 증가했습니다.' },
  ],
  artifacts: [image('artifact', 'FO·BO 정책서', '상태값·예외 케이스 예시'), image('artifact', '화면정의서와 QA', 'Figma 화면정의와 QA 시나리오'), image('outcome', '개선 현황 보고서', '과제 상태와 완료 범위')],
  collaboration: ['운영 담당자와 반복 문의 및 수작업 판단 구간을 확인했습니다.', '개발자와 상태값·데이터 항목·예외 처리 기준을 조율했습니다.', '화면정의서와 QA 시나리오를 개발 착수 기준으로 사용했습니다.'],
  outcomes: featuredProjectsA[0].impact,
  learnings: ['체류시간은 사용자의 목적 수행 여부와 함께 판단해야 합니다.', '정상 흐름보다 예외와 책임 범위를 먼저 확인해야 합니다.', '기획 완료와 실제 출시 성과를 구분해 표현해야 합니다.'],
  confidentialityNote: '회사 내부 정보 보호를 위해 실제 화면과 정책 문서는 비식별화하거나 재구성해 제공합니다.', images: [], nextProject: 'magic-ecole',
};
