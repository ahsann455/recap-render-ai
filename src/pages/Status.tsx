import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Status = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <SEOHead
      title="System status"
      description="Realtime overview of uptime and incidents for PreplitAI services."
      canonical={`${(import.meta as any).env?.VITE_SITE_URL || 'https://yourdomain.com'}/status`}
      robots="noindex,follow"
    />
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
          System <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">status</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Realtime overview of uptime and incidents for PreplitAI services.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-semibold text-black dark:text-white">All systems operational</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">API · Web · Realtime · Media processing</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Status;