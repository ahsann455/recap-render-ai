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
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground/80">
            Three simple steps to revolutionize your learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow z-10">
                  {index + 1}
                </div>
                
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-intense group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mt-6`}>
                  <step.icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 group-hover:gradient-text transition-all">{step.title}</h3>
                <p className="text-muted-foreground/80 text-lg leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-6 z-20">
                  <ArrowRight className="h-8 w-8 text-primary/50 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
