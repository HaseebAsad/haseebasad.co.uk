import React from 'react';
import Link from 'next/link';

// Preview blog posts
const posts = [
  {
    title: "Setting goals for 2026",
    description: "Discussing my goals and intentions for the new year to keep myself accountable",
    date: "2025-12-31",
    slug: "resolutions-2026"
  }
];

const BlogPreview = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold mb-6">Recent Posts</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <Link 
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h3 className="text-xl font-medium text-orange-500 hover:text-orange-400 transition-colors">
                {post.title}
              </h3>
              <div className="text-sm text-gray-400 dark:text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
      <Link 
        href="/blog"
        className="inline-block text-orange-500 hover:text-orange-400 transition-colors"
      >
        All Posts →
      </Link>
    </div>
  );
};

export default BlogPreview;