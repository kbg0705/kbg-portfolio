export function Header() {
  const basePath = import.meta.env.BASE_URL;

  return <header className="site-header"><a className="brand-lockup" href={basePath}><strong>KB.</strong><span>KIM BUGYEONG / PRODUCT MANAGER</span></a><nav className="global-nav" aria-label="주요 페이지"><a href={basePath}>HOME</a><a href={`${basePath}#work`}>WORK</a><a href={`${basePath}#about`}>ABOUT</a><a href="#contact">CONTACT</a></nav></header>;
}
