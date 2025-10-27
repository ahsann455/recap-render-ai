import { GraduationCap, Sparkles, Target, Brain, Video, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Professor Mode",
    description: "Watch a virtual AI professor explain concepts on a digital board, just like a real classroom experience.",
    gradient: "from-accent-detailed to-accent-detailed/70"
  },
  {
    icon: Sparkles,
    title: "Visual Learning Mode",
    description: "Immersive AI-generated visuals that bring complex concepts to life with stunning animations and graphics.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: FileText,
    title: "Summary Mode",
    description: "Get quick, concise video summaries perfect for review sessions and last-minute prep.",
    gradient: "from-accent-summary to-accent-summary/70"
  },
  {
    icon: GraduationCap,
    title: "Detailed Mode",
    description: "Deep dive into comprehensive explanations with step-by-step breakdowns of every concept.",
    gradient: "from-accent-detailed to-accent-detailed/70"
  },
  {
    icon: Target,
    title: "Test Prep Mode",
    description: "Practice with AI-generated questions and solutions based on your study materials.",
    gradient: "from-accent-test to-accent-test/70"
  },
  {
    icon: Video,
    title: "Multiple Formats",
    description: "Upload PDFs, Word documents, or text files - we handle all your note formats seamlessly.",
    gradient: "from-primary to-primary-glow"
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="block mt-3 gradient-text">
              Next-Gen Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform passive note-reading into immersive, 
            AI-powered video experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-500 hover:shadow-premium group cursor-pointer hover:scale-105 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
