import Link from "next/link";
import { notFound } from "next/navigation";
import Cover from "../../../components/Cover";
import { posts, getPost, formatDate } from "../../../data/posts";

// Tell Next.js which article pages to build
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Story not found" };
  }
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // Two more stories from the same category (or any others if there are none)
  const related = posts
    .filter((other) => other.slug !== post.slug)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 2);

  return (
    <article className="section">
      <div className="container article">
        <p className="post-meta">
          <Link href="/blog">Stories</Link> / <span className="tag">{post.category}</span>
        </p>
        <h1>{post.title}</h1>
        <p className="post-meta">
          {formatDate(post.date)} &middot; {post.readTime} min read
        </p>

        <Cover file={post.image} alt={post.title} className="article-cover" />

        {post.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <hr />
        <h2>More stories</h2>
        <ul className="related">
          {related.map((other) => (
            <li key={other.slug}>
              <Link href={"/blog/" + other.slug}>{other.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
