import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Templates = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <SEOHead
      title="Examples & Templates"
      description="Explore templates and example outputs for AI video lectures."
      canonical={`${(import.meta as any).env?.VITE_SITE_URL || 'https://yourdomain.com'}/templates`}
    />
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-0 -right-48 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Template</span> gallery
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Kickstart your workspace with ready‑to‑use lecture, syllabus, and project templates.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">🧬</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Biology Lectures</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Complete templates for cell biology, genetics, and anatomy lectures with diagrams and animations.</p>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">12 templates • Science</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">🔢</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Mathematics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Algebra, calculus, and statistics templates with step-by-step problem solving demonstrations.</p>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">15 templates • Math</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Business & Marketing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">MBA-level content covering strategy, finance, and digital marketing fundamentals.</p>
          <div className="text-xs text-green-600 dark:text-green-400 font-medium">10 templates • Business</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Programming</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Coding tutorials for Python, JavaScript, and web development with code examples and exercises.</p>
          <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">18 templates • Tech</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">History & Social Studies</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">World history, civics, and geography lectures with timelines and interactive maps.</p>
          <div className="text-xs text-pink-600 dark:text-pink-400 font-medium">14 templates • Humanities</div>
        </article>

        <article className="p-8 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30 hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">🎭</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Language Learning</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">ESL, Spanish, and French lessons with pronunciation guides and cultural context.</p>
          <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">20 templates • Languages</div>
        </article>
      </div>
    </section>
    <Footer />
  </div>
);

export default Templates;