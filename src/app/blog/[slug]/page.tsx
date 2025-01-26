import { getBlogPost } from '../utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeHighlight from 'rehype-highlight'
import rehypeMath from 'rehype-math'
import remarkMath from 'remark-math'

interface Props {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
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
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote 
          source={post.content}
          components={{}}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeHighlight, rehypeMath],
            }
          }}
        />
      </div>
    </article>
  )
}