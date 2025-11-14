import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Integrations = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <SEOHead
      title="Integrations"
      description="Connect PreplitAI with your favorite tools to automate workflows."
      canonical={`${(import.meta as any).env?.VITE_SITE_URL || 'https://yourdomain.com'}/integrations`}
    />
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-0 -right-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Integrations</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Connect PreplitAI with your favorite tools to automate workflows.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">📂</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Google Drive</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Import documents directly from Drive and export videos to your folders automatically.</p>
          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full">Active</span>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🏛️</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Canvas LMS</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Publish lectures directly to Canvas courses and sync with your class schedule.</p>
          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full">Active</span>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Moodle</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Seamless integration with Moodle for educational institutions worldwide.</p>
          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full">Active</span>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Outlook Calendar</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Schedule lecture creation and sync deadlines with your Outlook calendar.</p>
          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full">Active</span>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🎥</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">YouTube</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Upload generated videos directly to your YouTube channel with optimized metadata.</p>
          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full">Active</span>
        </article>

        <article className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl">
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Zapier</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect to 5,000+ apps through Zapier automation workflows.</p>
          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full">Coming Soon</span>
        </article>
      </div>
    </section>
    <Footer />
  </div>
);

export default Integrations;