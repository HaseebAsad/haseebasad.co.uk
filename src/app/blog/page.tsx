import Link from 'next/link'
import { getBlogPosts } from './utils'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-gray-600 dark:hover:text-gray-300">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}