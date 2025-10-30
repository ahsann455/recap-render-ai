import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";

const bullets = {
  knowledge: [
    "Centralized docs, pages, and lecture assets",
    "Structured hubs for teams, projects, and policies",
    "Granular permissions and approval workflows",
  ],
  search: [
    "Enterprise search across notes, videos, and knowledge bases",
    "AI-answers with citations back to your content",
    "Instant Q&A about meetings and lectures",
  ],
  ai: [
    "MyTeacherAI Agents to automate recurring work",
    "AI Meeting Notes with action items and summaries",
    "Multilingual voice, avatars, and realistic TTS",
  ],
  security: [
    "SAML SSO (Okta, Azure AD, Google)",
    "SCIM user provisioning and deprovisioning",
    "Audit log and admin analytics",
    "Encryption in transit and at rest",
  ],
};

// Showcase sections (image + copy) for enterprise value props
const showcase = [
  {
    key: 'flexible',
    eyebrow: 'Customizable',
    title: 'Flexible AI workflows that grow with you.',
    copy:
      'Adapt the platform to your team\'s needs with templates, roles, and modular AI tools—from document parsing to avatar lectures.',
    bullets: [
      'Reusable templates for lessons, SOPs, and reports',
      'Connect upload → script → video in one flow',
      'Brand-safe themes, fonts, and voice presets',
    ],
    img: '/assets/enterprise/flexible.svg',
  },
  {
    key: 'connected',
    eyebrow: 'Connected',
    title: 'Every team on the same page, always.',
    copy:
      'Keep product, ops, and training aligned in an AI-searchable workspace with permissions for every audience.',
    bullets: [
      'Search across docs, videos, and transcripts',
      'Citations link answers back to trusted sources',
      'Workspaces for departments, programs, and clients',
    ],
    img: '/assets/enterprise/projects.svg',
  },
  {
    key: 'ship-faster',
    eyebrow: 'Ship faster',
    title: 'Simplify your content development.',
    copy:
      'Streamline the entire pipeline—ingest, summarize, generate scenes, and publish—so teams can deliver training faster.',
    bullets: [
      'Parallel scene generation and video rendering',
      'Versioned outputs with downloadable SRTs',
      'Admin analytics to track content velocity',
    ],
    img: '/assets/enterprise/product-dev.svg',
  },
] as const;

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">MyTeacherAI for Enterprise</p>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold text-black dark:text-white">
          Knowledge and work. Connected.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          One secure AI workspace where enterprise teams plan, collaborate, and build faster together.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-block">
            <Button className="px-6 py-5 h-auto text-sm font-semibold">Request a demo</Button>
          </a>
          <a href="/pricing" className="inline-block">
            <Button variant="outline" className="px-6 py-5 h-auto text-sm font-semibold">Get started</Button>
          </a>
        </div>
      </section>

      {/* Value blocks */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-8">
        {/* Company knowledge */}
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">Company knowledge</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">One home that’s organized, searchable, and accurate.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
            {bullets.knowledge.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        {/* Enterprise search */}
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">Enterprise search</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Instantly surface answers across MyTeacherAI with citations.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
            {bullets.search.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        {/* AI */}
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">AI for every team</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Automate manual tasks and accelerate content creation.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
            {bullets.ai.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        {/* Security */}
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">Security & admin</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Enterprise-grade controls to keep data safe and compliant.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
            {bullets.security.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
      </section>

      {/* Showcase (image + copy) */}
      <section className="border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          {showcase.map((s, idx) => (
            <div key={s.key} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={s.img}
                  alt={`${s.eyebrow} — ${s.title}`}
                  className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-black"
                  loading="lazy"
                />
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{s.eyebrow}</p>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">{s.title}</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl">{s.copy}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                  {s.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <h3 className="text-xl font-semibold text-black dark:text-white">Request a demo</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Tell us your work email and we’ll get in touch within 1 business day.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="name@company.com" className="h-11" required />
            <Button type="submit" className="h-11">Request a demo</Button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted about MyTeacherAI Enterprise.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;