// src/utils/blog.ts
import fs from 'fs/promises';  // Change to use promise-based fs
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogFrontmatter, blogSchema, BLOG_CONFIG } from '@/config/blog';
import { SITE } from '@/config/site';

// Get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const postsDirectory = path.join(process.cwd(), BLOG_CONFIG.postsDirectory);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Validate frontmatter against schema
    const frontmatter = blogSchema.parse({
      ...data,
      slug: slug,
    });

    return {
      frontmatter,
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(process.cwd(), BLOG_CONFIG.postsDirectory);
    const fileNames = await fs.readdir(postsDirectory);
    
    const postsPromises = fileNames
      .filter(fileName => /\.mdx?$/.test(fileName))
      .map(async fileName => {
        const slug = fileName.replace(/\.mdx?$/, '');
        return getPostBySlug(slug);
      });

    const posts = await Promise.all(postsPromises);
    
    return posts
      .filter((post): post is BlogPost => {
        if (!post) return false;
        if (process.env.NODE_ENV === 'production' && post.frontmatter.draft) {
          return false;
        }
        if (process.env.NODE_ENV === 'production') {
          const scheduledDate = new Date(post.frontmatter.pubDatetime).getTime();
          const now = Date.now();
          const diff = scheduledDate - now;
          if (diff > SITE.scheduledPostMargin) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.pubDatetime);
        const dateB = new Date(b.frontmatter.pubDatetime);
        return BLOG_CONFIG.postSortOrder === 'desc'
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get featured posts
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts
    .filter(post => post.frontmatter.featured)
    .slice(0, BLOG_CONFIG.featuredPostCount);
}

// Get recent posts
export async function getRecentPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, BLOG_CONFIG.recentPostCount);
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.frontmatter.tags.includes(tag));
}

// Get all unique tags
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getAllPosts();
  const tagCount: Record<string, number> = {};
  
  posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}