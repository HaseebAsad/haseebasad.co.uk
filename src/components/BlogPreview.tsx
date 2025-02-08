import React from 'react';
import Link from 'next/link';

// Sample blog posts data structure
const posts = [
  {
    title: "Generating Alpha",
    description: "How to use Git Hooks to set your Created and Modified Dates on quantitative trading strategies",
    date: "2025-01-24",
    slug: "generating-alpha"
  },
  {
    title: "Understanding Market Microstructure",
    description: "A deep dive into how markets actually function at the microscopic level",
    date: "2025-01-20",
    slug: "market-microstructure"
  },
  {
    title: "Building Trading Systems",
    description: "Essential components of robust automated trading systems",
    date: "2025-01-15",
    slug: "trading-systems"
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