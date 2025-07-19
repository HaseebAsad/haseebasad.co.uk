// app/about/page.tsx
export default function AboutPage() {
    return (
      <main className="min-h-screen p-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="mt-4 text-lg space-y-2">
          <p>Currently: Quant Risk @ Troy Asset Management.</p>
          <p>Previous: Quant Trading @ Mako Trading.</p>
          <p>Durham MMath</p>
          <p>
            <a href="https://github.com/haseebasad" className="text-blue-500 hover:underline">
              GitHub
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/haseeb-asad-535862177/" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </main>
    )
  }