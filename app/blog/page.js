import { Suspense } from "react";
import PostList from "../../components/PostList";
import { posts, categories } from "../../data/posts";

export const metadata = {
  title: "Stories",
  description: "All Wanderlust travel stories.",
};

export default function BlogPage() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <h1>Stories</h1>
          <p>Search or pick a place.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading stories...</p>}>
            <PostList posts={posts} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
