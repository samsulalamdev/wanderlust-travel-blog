"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PostCard from "./PostCard";

// The list of posts with category buttons and a search box
export default function PostList({ posts, categories }) {
  // A link like /blog?category=Hills starts with that category selected
  const startCategory = useSearchParams().get("category");
  const [category, setCategory] = useState(
    categories.includes(startCategory) ? startCategory : "All"
  );
  const [search, setSearch] = useState("");

  const shown = posts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const text = (post.title + " " + post.excerpt).toLowerCase();
    return matchesCategory && text.includes(search.trim().toLowerCase());
  });

  return (
    <div>
      <div className="filters">
        <input
          type="search"
          placeholder="Search stories"
          aria-label="Search stories"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div>
          {["All", ...categories].map((name) => (
            <button
              key={name}
              className={name === category ? "chip active" : "chip"}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="empty">No stories found. Try a different word.</p>
      ) : (
        <div className="post-grid">
          {shown.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
