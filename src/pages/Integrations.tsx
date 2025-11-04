import { Footer } from "@/components/Footer";

const Integrations = () => (
  <div className="min-h-screen bg-white dark:bg-gray-950">
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">Integrations</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
        Connect PreplitAI with your favorite tools to automate workflows.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {['Slack','Google Drive','GitHub','Zoom','Figma','LMS'].map((name) => (
          <article key={name} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white">{name}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sync content and streamline collaboration.</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Integrations;