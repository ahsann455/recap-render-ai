import { Footer } from "@/components/Footer";

const Status = () => (
  <div className="min-h-screen bg-white dark:bg-gray-950">
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">System status</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
        Realtime overview of uptime and incidents for PreplitAI services.
      </p>
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