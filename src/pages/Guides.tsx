import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Guides = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <SEOHead
      title="How it works: Convert notes to video"
      description="Step-by-step guide to generating AI video lectures from your notes."
      canonical={`${(import.meta as any).env?.VITE_SITE_URL || 'https://yourdomain.com'}/guides`}
      schemaMarkup={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Convert notes to video lecture",
        step: [
          { "@type": "HowToStep", name: "Upload notes" },
          { "@type": "HowToStep", name: "Choose options" },
          { "@type": "HowToStep", name: "Generate video" }
        ]
      }}
    />
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Guides</span> & tutorials
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Step-by-step guides to build AI lectures, agents, and knowledge hubs.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Getting Started</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Learn the basics of creating your first video lecture in under 5 minutes.</p>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">5 min read • Beginner</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🎬</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Choosing the Right Voice</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Explore different TTS voices and learn how to select the perfect narrator for your content.</p>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">8 min read • Beginner</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Script Optimization</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Best practices for writing and editing scripts that create engaging video lectures.</p>
          <div className="text-xs text-pink-600 dark:text-pink-400 font-medium">12 min read • Intermediate</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Visual Customization</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Master slide design, transitions, and visual effects to enhance your lectures.</p>
          <div className="text-xs text-green-600 dark:text-green-400 font-medium">15 min read • Intermediate</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Batch Processing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Generate multiple lectures at once and automate your video production workflow.</p>
          <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">10 min read • Advanced</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">API Integration</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect PreplitAI to your existing systems using our developer API.</p>
          <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">20 min read • Advanced</div>
        </article>
      </div>
    </section>
    <Footer />
  </div>
);

export default Guides;