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
    <section id="upload" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Create Your
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI Lecture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose your learning style and let AI do the rest
          </p>
        </div>

        {/* Mode Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Learning Mode</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {modes.map((mode) => (
              <Card
                key={mode.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedMode === mode.id
                    ? `border-2 border-${mode.color} shadow-elevated`
                    : 'border-2 border-transparent hover:border-border'
                }`}
                onClick={() => setSelectedMode(mode.id)}
              >
                <div className="text-3xl mb-2">{mode.icon}</div>
                <h4 className="font-semibold mb-1">{mode.name}</h4>
                <p className="text-sm text-muted-foreground">{mode.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Style Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Lecture Style</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedStyle === style.id
                    ? 'border-2 border-primary shadow-elevated'
                    : 'border-2 border-transparent hover:border-border'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className="text-3xl mb-2">{style.icon}</div>
                <h4 className="font-semibold mb-1">{style.name}</h4>
                <p className="text-sm text-muted-foreground">{style.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
              {isProcessing ? (
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              ) : (
                <Upload className="h-8 w-8 text-white" />
              )}
            </div>
            
            {fileName ? (
              <div className="mb-4">
                <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">{fileName}</p>
                <p className="text-sm text-muted-foreground">Ready to process</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-2">Upload Your Notes</h3>
                <p className="text-muted-foreground mb-6">
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
            
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={isProcessing}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    {fileName ? 'Upload Different File' : 'Choose File'}
                  </>
                )}
              </Button>

              {fileName && !isProcessing && (
                <Button
                  size="lg"
                  onClick={handleGenerateLecture}
                  className="bg-gradient-to-r from-accent-summary to-accent-detailed hover:shadow-glow"
                >
                  <Video className="mr-2 h-5 w-5" />
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
