import { Features as FeaturesGrid } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const bullets = {
  creation: [
    "Text to Speech with studio‑quality voices",
    "Lifelike AI Avatars for presentational lectures",
    "Smart Summarization and outline generation",
  ],
  study: [
    "Auto‑generated practice questions",
    "Key concepts and flashcards",
    "Progress tracking and analytics",
  ],
  platform: [
    "Upload PDF, DOCX, or text",
    "Export to video or share pages",
    "API & SDKs for custom workflows",
  ],
  security: [
    "SSO, role‑based permissions",
    "Audit log and admin analytics",
    "Encryption in transit and at rest",
  ],
};

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">Powerful features for modern learning</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Everything you need to turn notes into engaging, multilingual AI lectures — and share them with your team or class.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/pricing" className="inline-block">
            <Button className="px-6 py-5 h-auto text-sm font-semibold">Get started</Button>
          </a>
          <a href="/enterprise#contact" className="inline-block">
            <Button variant="outline" className="px-6 py-5 h-auto text-sm font-semibold">Talk to sales</Button>
          </a>
        </div>
      </section>

      {/* Existing feature grid */}
      <FeaturesGrid />

      {/* More capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-black dark:text-white">Create</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {bullets.creation.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-black dark:text-white">Study</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {bullets.study.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-black dark:text-white">Platform</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {bullets.platform.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-black dark:text-white">Security</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {bullets.security.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;