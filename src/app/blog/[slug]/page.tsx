// app/blog/[slug]/page.tsx
type Props = {
    params: {
      slug: string
    }
  }
  
  export default function BlogPostPage({ params }: Props) {
    return (
      <article className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold">Blog Post Title</h1>
        {/* Blog post content will go here */}
      </article>
    )
  }