import Link from "next/link";
import Cover from "../components/Cover";
import PostCard from "../components/PostCard";
import { posts, categories } from "../data/posts";

export default function HomePage() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">A Bangladesh travel blog</p>
            <h1>Find your next quiet place to go.</h1>
            <p className="lead">
              Short, honest guides to beaches, hills, forests and tea gardens. Read a story, pack a bag and go.
            </p>
            <Link href="/blog" className="btn">
              Read the stories
            </Link>
          </div>
          <Cover file="hero.jpg" alt="Travellers looking at a green valley" className="hero-cover" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Browse by place</h2>
          <div className="category-row">
            {categories.map((name) => (
              <Link key={name} href={"/blog?category=" + encodeURIComponent(name)} className="category-box">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title">Latest stories</h2>
          <div className="post-grid">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="center">
            <Link href="/blog" className="btn btn-outline">
              See all stories
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
