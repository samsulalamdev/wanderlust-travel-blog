import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Wander<span>lust</span>
        </Link>
        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/blog">Stories</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
