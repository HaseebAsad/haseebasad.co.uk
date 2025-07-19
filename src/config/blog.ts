// src/config/blog.ts
import { z } from 'zod';
import { SITE } from './site';
import { Analytics } from "@vercel/analytics/next";

// Schema for blog post frontmatter
export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDatetime: z.coerce.date(),
  modDatetime: z.coerce.date().optional(),
  author: z.string().default(SITE.author),
  slug: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default(["others"]),
  ogImage: z.string().optional(),
  canonicalURL: z.string().url().optional(),
});

// Helper types based on the schema
export type BlogFrontmatter = z.infer<typeof blogSchema>;

// Blog content configuration
export const BLOG_CONFIG = {
  postsDirectory: 'content/blog',
  postsPerPage: SITE.postPerPage,
  defaultTag: 'others',
  featuredPostCount: 3,
  recentPostCount: 4,
  postSortOrder: 'desc' as const,
} as const;

// Utility type for blog post with content
export type BlogPost = {
  frontmatter: BlogFrontmatter;
  content: string;
  excerpt?: string;
  slug: string;
};