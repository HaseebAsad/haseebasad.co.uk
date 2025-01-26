// src/app/blog/utils.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'src/app/blog/posts')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  image?: string
  content: string
}

export function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(POSTS_PATH)
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const source = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(source)

      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        image: data.image,
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      image: data.image,
      content
    }
  } catch (error) {
    return null
  }
}