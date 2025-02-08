// app/blog/page.tsx
import { getAllPosts } from '@/utils/blog'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-10">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-700 pb-8">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold text-orange-500 group-hover:text-orange-400 transition-colors mb-2">
                {post.frontmatter.title}
              </h2>
              <div className="flex gap-4 text-sm text-gray-400 mb-3">
                <time dateTime={new Date(post.frontmatter.pubDatetime).toISOString()} className="font-mono">
                  {new Date(post.frontmatter.pubDatetime).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <div className="flex gap-2">
                  {post.frontmatter.tags.map(tag => (
                    <span key={tag} className="text-orange-500/70">#{tag}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300">
                {post.frontmatter.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}