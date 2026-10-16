import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <h1>Page not found</h1>
        <p>We could not find that page.</p>
        <Link href="/" className="btn">
          Back to home
        </Link>
      </div>
    </section>
  );
}
