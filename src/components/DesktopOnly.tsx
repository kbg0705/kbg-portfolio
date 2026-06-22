import { Monitor } from 'lucide-react';

export function DesktopOnly() {
  return (
    <section className="desktop-only">
      <Monitor aria-hidden="true" size={40} />
      <h1>PC에서 포트폴리오를 확인해 주세요</h1>
      <p>
        이 포트폴리오는 1024px 이상 데스크톱 환경에 맞춰 설계되었습니다.
        더 넓은 화면에서 프로젝트 흐름과 상세 내용을 확인할 수 있습니다.
      </p>
    </section>
  );
}
