// src/app/blog/mdx-config.ts
// @ts-ignore - no type definitions available
import rehypeHighlight from 'rehype-highlight'
// @ts-ignore - no type definitions available
import rehypeMath from 'rehype-math'
// @ts-ignore - no type definitions available
import remarkMath from 'remark-math'

export const mdxOptions = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeHighlight, rehypeMath],
}