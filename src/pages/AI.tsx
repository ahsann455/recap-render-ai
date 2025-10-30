import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Agents",
    desc: "Automate repetitive work — from drafting lecture outlines to publishing course pages and sending updates.",
    points: ["Multi‑step workflows", "Triggers & schedules", "Human-in-the-loop approvals"],
  },
  {
    title: "AI Meeting Notes",
    desc: "Perfect notes with action items, decisions, and summaries for every standup, class, or review.",
    points: ["Speaker attribution", "Highlights & tasks", "Share to docs in 1 click"],
  },
  {
    title: "Enterprise Search",
    desc: "Find answers instantly across docs, videos, and knowledge bases — with citations back to the source.",
    points: ["Semantic search", "Citations", "Ask anything Q&A"],
  },
  {
    title: "Voice & Avatars",
    desc: "Generate realistic lectures with multilingual voices and lifelike avatars.",
    points: ["40+ languages", "Custom voices", "Studio‑quality TTS"],
  },
  {
    title: "Translate & rewrite",
    desc: "Transform content with tone, length, and language controls right where you work.",
    points: ["Rewrite & summarize", "Translate", "Fix grammar"]
  },
  {
    title: "Developer API",
    desc: "Bring MyTeacherAI into your tools with secure APIs and SDKs.",
    points: ["REST & webhooks", "OAuth & tokens", "Rate limits & audit"]
  },
];

const AI = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">MyTeacherAI · Product</p>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold text-black dark:text-white">
          The AI workspace that works for you.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          All‑in‑one AI that takes notes, searches knowledge, and builds workflows — right where your team plans and learns.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/pricing" className="inline-block">
            <Button className="px-6 py-5 h-auto text-sm font-semibold">Get started</Button>
          </a>
          <a href="/enterprise#contact" className="inline-block">
            <Button variant="outline" className="px-6 py-5 h-auto text-sm font-semibold">Request a demo</Button>
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-500">All‑in‑one pricing · cancel anytime</p>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-6 pb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white">{f.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{f.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
              {f.points.map((p) => (<li key={p}>{p}</li>))}
            </ul>
          </div>
        ))}
      </section>

      {/* Why MyTeacherAI */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-black dark:text-white">Why MyTeacherAI</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-black dark:text-white">All‑in‑one</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Docs, search, notes, and automation in one secure workspace.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-black dark:text-white">Enterprise‑ready</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">SSO, SCIM, audit logs, role‑based permissions, and admin analytics.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-black dark:text-white">Private & secure</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Your data remains yours. Encryption in transit and at rest.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;