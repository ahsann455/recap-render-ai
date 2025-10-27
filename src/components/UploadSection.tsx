import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Video, Loader2 } from "lucide-react";
import { toast } from "sonner";

type LectureMode = "summary" | "detailed" | "test";
type LectureStyle = "professor" | "visual";

const modes = [
  {
    id: "summary" as LectureMode,
    name: "Summary Mode",
    description: "Quick overview of key concepts",
    color: "accent-summary",
    icon: "⚡"
  },
  {
    id: "detailed" as LectureMode,
    name: "Detailed Mode",
    description: "In-depth explanations",
    color: "accent-detailed",
    icon: "📚"
  },
  {
    id: "test" as LectureMode,
    name: "Test Prep Mode",
    description: "Practice questions & solutions",
    color: "accent-test",
    icon: "🎯"
  }
];

const styles = [
  {
    id: "professor" as LectureStyle,
    name: "AI Professor",
    description: "Virtual teacher with board",
    icon: "👨‍🏫"
  },
  {
    id: "visual" as LectureStyle,
    name: "Visual Concepts",
    description: "Animated visual explanations",
    icon: "🎨"
  }
];

export const UploadSection = () => {
  const [selectedMode, setSelectedMode] = useState<LectureMode>("summary");
  const [selectedStyle, setSelectedStyle] = useState<LectureStyle>("professor");
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!validTypes.includes(fileExtension)) {
        toast.error("Please upload a PDF, DOC, DOCX, or TXT file");
        return;
      }

      setFileName(file.name);
      setIsProcessing(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        toast.success(`Successfully uploaded ${file.name}! Ready to generate lecture.`);
      }, 2000);
    }
  };

  const handleGenerateLecture = () => {
    if (!fileName) {
      toast.error("Please upload a file first");
      return;
    }

    toast.info("Video generation coming soon! This is the MVP version.");
  };

  return (
    <section id="upload" className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Create Your
            <span className="block mt-3 gradient-text">
              AI Lecture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80">
            Choose your learning style and let our AI craft the perfect experience
          </p>
        </div>

        {/* Mode Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Select Learning Mode</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <Card
                key={mode.id}
                className={`p-6 cursor-pointer transition-all duration-500 group ${
                  selectedMode === mode.id
                    ? 'glass-card shadow-glow scale-105 border-primary/50'
                    : 'glass hover:bg-white/10 hover:scale-105'
                }`}
                onClick={() => setSelectedMode(mode.id)}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{mode.icon}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{mode.name}</h4>
                <p className="text-sm text-muted-foreground/80">{mode.description}</p>
                {selectedMode === mode.id && (
                  <div className="mt-4 w-full h-1 gradient-primary rounded-full" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Style Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Select Lecture Style</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={`p-6 cursor-pointer transition-all duration-500 group ${
                  selectedStyle === style.id
                    ? 'glass-card shadow-glow scale-105 border-primary/50'
                    : 'glass hover:bg-white/10 hover:scale-105'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{style.icon}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{style.name}</h4>
                <p className="text-sm text-muted-foreground/80">{style.description}</p>
                {selectedStyle === style.id && (
                  <div className="mt-4 w-full h-1 gradient-primary rounded-full" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <Card className="p-12 glass-card hover:bg-white/10 transition-all duration-500 relative overflow-hidden group">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              {isProcessing ? (
                <Loader2 className="h-10 w-10 text-white animate-spin" />
              ) : (
                <Upload className="h-10 w-10 text-white" />
              )}
            </div>
            
            {fileName ? (
              <div className="mb-8 glass-card p-6 rounded-xl inline-block">
                <FileText className="h-12 w-12 mx-auto mb-3 text-primary" />
                <p className="text-lg font-semibold mb-1">{fileName}</p>
                <p className="text-sm text-muted-foreground/80">Ready to generate your lecture</p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold mb-3">Upload Your Notes</h3>
                <p className="text-muted-foreground/80 mb-8 text-lg">
                  PDF, DOC, DOCX, or TXT files supported
                </p>
              </>
            )}

            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileUpload}
              disabled={isProcessing}
            />
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={isProcessing}
                className="gradient-primary hover:shadow-glow transition-all duration-500 text-lg px-8 py-6 border border-white/20"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-3 h-6 w-6" />
                    {fileName ? 'Upload Different File' : 'Choose File'}
                  </>
                )}
              </Button>

              {fileName && !isProcessing && (
                <Button
                  size="lg"
                  onClick={handleGenerateLecture}
                  className="bg-gradient-to-r from-accent-summary via-accent-detailed to-accent-test hover:shadow-intense transition-all duration-500 text-lg px-8 py-6 border border-white/20 animate-glow"
                >
                  <Video className="mr-3 h-6 w-6" />
                  Generate Lecture
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
