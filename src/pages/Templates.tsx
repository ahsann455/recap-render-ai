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
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white">Template #{i + 1}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">A prebuilt page to speed up your setup.</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Templates;