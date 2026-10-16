import Link from "next/link";
import Cover from "./Cover";
import { formatDate } from "../data/posts";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link href={"/blog/" + post.slug} className="post-card-image">
        <Cover file={post.image} alt={post.title} />
      </Link>
      <div className="post-card-body">
        <p className="post-meta">
          <span className="tag">{post.category}</span> {formatDate(post.date)} &middot; {post.readTime} min read
        </p>
        <h3>
          <Link href={"/blog/" + post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}
