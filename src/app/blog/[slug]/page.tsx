// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/utils/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)
  if (!post) {
    notFound();
    // return a friendly fallback rendering
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-400 mb-4">
          <time dateTime={new Date(post.frontmatter.pubDatetime).toISOString()} className="font-mono">
            {new Date(post.frontmatter.pubDatetime).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="flex gap-2">
            {post.frontmatter.tags.map(tag => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-orange-500/70 hover:text-orange-500"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        {post.frontmatter.description && (
          <p className="text-xl text-gray-300">
            {post.frontmatter.description}
          </p>
        )}
      </header>

      <div className="prose prose-invert prose-orange max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}