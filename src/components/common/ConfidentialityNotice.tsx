import type { ReactNode } from 'react';

export function ConfidentialityNotice({ children }: { children: ReactNode }) {
  return (
    <aside className="confidentiality-notice" aria-label="비식별화 안내">
      <span>Confidentiality</span>
      <p>{children}</p>
    </aside>
  );
}
