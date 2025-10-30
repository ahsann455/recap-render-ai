import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Footer } from "@/components/Footer";

const features = {
  free: [
    "Trial of Notion AI",
    "Basic forms",
    "Basic sites",
    "Calendar",
    "Databases (limited)",
  ],
  plus: [
    "Everything in Free",
    "Unlimited uploads",
    "Unlimited charts",
    "Custom forms",
    "Basic integrations",
  ],
  business: [
    "Everything in Plus",
    "Enterprise search",
    "AI meeting notes",
    "SAML SSO",
    "Granular permissions",
  ],
  enterprise: [
    "Everything in Business",
    "Advanced security & controls",
    "User provisioning (SCIM)",
    "Audit log",
    "Custom contract & pricing",
  ],
} as const;

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white">
          One tool for your whole company.
        </h1>
        <p className="text-xl md:text-2xl text-center text-black dark:text-white mt-2 font-semibold">
          Free for teams to try.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setYearly(false)}
            className={`px-3 py-1.5 text-sm rounded-full ${!yearly ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Pay monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-3 py-1.5 text-sm rounded-full ${yearly ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Pay yearly
          </button>
          {yearly && (
            <span className="text-xs text-gray-500">Save up to 20%</span>
          )}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Free</h3>
            <div className="mt-4 text-4xl font-extrabold text-black dark:text-white">$0</div>
            <p className="text-xs text-gray-500 mb-4">per member / month</p>
            <Button className="w-full" variant="outline">Sign up</Button>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {features.free.map((f) => (
                <li key={f} className="flex gap-2"><span>✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>

          {/* Plus */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Plus</h3>
            <div className="mt-4 text-4xl font-extrabold text-black dark:text-white">
              {yearly ? "$12" : "$14"}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">per member / month</p>
            <Button className="w-full">Get started</Button>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {features.plus.map((f) => (
                <li key={f} className="flex gap-2"><span>✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="rounded-xl ring-1 ring-black/10 dark:ring-white/10 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Business</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Recommended</span>
            </div>
            <div className="mt-4 text-4xl font-extrabold text-black dark:text-white">
              {yearly ? "$24" : "$30"}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">per member / month</p>
            <Button className="w-full">Get started</Button>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {features.business.map((f) => (
                <li key={f} className="flex gap-2"><span>✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Enterprise</h3>
            <div className="mt-4 text-3xl font-extrabold text-black dark:text-white">Custom</div>
            <p className="text-xs text-gray-500 mb-4">Contact sales</p>
            <Button className="w-full" variant="outline">Contact Sales</Button>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {features.enterprise.map((f) => (
                <li key={f} className="flex gap-2"><span>✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white">Questions & answers</h2>
          <div className="mx-auto max-w-3xl mt-8 border-y border-gray-200 dark:border-gray-800">
            <FAQSection />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How are prices calculated?",
    a: "Plus and Business are priced per active member per month. Yearly billing applies a discount and is charged upfront for 12 months.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. You can start on Free and try all core features. Upgrading unlocks higher export quality, more avatars, and admin features.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major credit/debit cards. For Enterprise, we also support invoicing and bank transfer.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from Workspace Settings → Billing. Your plan will remain active until the end of the current billing period.",
  },
  {
    q: "How do seats work?",
    a: "Seats are billed for each member with edit access. Guests with view-only access are free. You can add or remove seats at any time.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit and at rest. Business includes SSO and audit logs; Enterprise adds SCIM and advanced controls.",
  },
  {
    q: "Do you offer student or nonprofit discounts?",
    a: "Yes—contact support with verification for discounted Plus pricing.",
  },
  {
    q: "What happens to my content if I downgrade?",
    a: "You keep access to your content. Features above your new limits (e.g., export quality) will be restricted until you upgrade again.",
  },
  {
    q: "Where can I find invoices?",
    a: "Workspace Settings → Billing → Invoices. Owners and billing admins have access.",
  },
];

function FAQSection() {
  return (
    <Accordion type="single" collapsible className="divide-y divide-gray-200 dark:divide-gray-800">
      {faqs.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-base md:text-lg text-black dark:text-white">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Pricing;
