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
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Smarter Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform passive note-reading into active, engaging video learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group cursor-pointer bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
