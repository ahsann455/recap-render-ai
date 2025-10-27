import { Upload, Brain, Video, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Notes",
    description: "Simply drag and drop your study materials - PDFs, documents, or text files.",
    color: "from-accent-summary to-accent-summary/70"
  },
  {
    icon: Brain,
    title: "AI Processing",
    description: "Our advanced AI analyzes your content and creates a structured learning plan.",
    color: "from-primary to-primary-glow"
  },
  {
    icon: Video,
    title: "Watch & Learn",
    description: "Get personalized video lectures with AI professors or visual explanations.",
    color: "from-accent-test to-accent-test/70"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to revolutionize your learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-elevated hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-10 -right-8 h-6 w-6 text-muted-foreground/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
