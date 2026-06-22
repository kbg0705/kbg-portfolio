import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function AboutPage() {
  const groups = [
    ['Education', profile.education],
    ['Certifications', profile.certifications],
    ['Tools', profile.tools],
    ['Interest Areas', profile.interests],
  ] as const;

  return <><Header /><main className="page-shell about-page"><header className="page-hero"><p className="eyebrow">About</p><h1>복잡한 운영 문제를 사용자가 이해할 수 있는 제품 구조로 바꿉니다.</h1><div className="profile-panel">{profile.profile.map((item) => <p key={item}>{item}</p>)}</div></header><section className="about-principles"><div><p className="eyebrow">Problem Solving</p><h2>PM으로서의 문제 해결 방식</h2></div><ol>{profile.principles.map((item) => <li key={item}>{item}</li>)}</ol></section><section className="about-grid">{groups.map(([title, items]) => <article key={title}><h2>{title}</h2><div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>)}</section><section className="about-section"><div><p className="eyebrow">Selected Activities</p><h2>AI, 검색, 서비스디자인으로 확장한 경험</h2></div><ol className="activity-list">{profile.selectedActivities.map((activity) => <li key={`${activity.date}-${activity.title}`}><span>{activity.date}</span><Link to={activity.href}>{activity.title}</Link></li>)}</ol></section></main><Footer email={profile.email} /></>;
}
