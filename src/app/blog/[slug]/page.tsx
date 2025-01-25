// app/blog/[slug]/page.tsx
type Props = {
    params: {
      slug: string
    }
  }
  
  // src/app/blog/[slug]/page.tsx
// If you're not using params, you can remove it:
export default function BlogPost() {  // Remove {params} if not used
  return (
    <div>
      {/* Your component content */}
    </div>
  )
}