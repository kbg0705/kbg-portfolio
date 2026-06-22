import { Download, Github, Mail } from 'lucide-react';
import { EmailCopyButton } from './EmailCopyButton';

type FooterProps = {
  email: string;
  onCopyEmail: () => void;
};

export function Footer({ email, onCopyEmail }: FooterProps) {
  return (
    <footer className="site-footer">
      <div>
        <p>좋은 제품은 사용자의 막힘을 발견하는 것에서 시작합니다.</p>
        <p>함께 이야기할 기회를 기다리겠습니다.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${email}`}>
          <Mail size={16} aria-hidden="true" />
          {email}
        </a>
        <EmailCopyButton email={email} onCopy={onCopyEmail} />
        <a href="/resume/김부경_이력서.pdf" download>
          <Download size={16} aria-hidden="true" />
          이력서 다운로드
        </a>
        <a href="https://github.com/kbg0705" target="_blank" rel="noreferrer">
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
      </div>
      <span>Last updated: 2026</span>
    </footer>
  );
}
