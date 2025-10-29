import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, X, Video } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { api } from "@/services/api";

interface LectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  lecture: {
    mode: string;
    style: string;
    script: string;
    sceneBreakdown: string;
    wordCount: number;
    estimatedDuration: number;
  } | null;
}

export const LectureModal = ({ isOpen, onClose, lecture }: LectureModalProps) => {
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  
  if (!lecture) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const downloadAsText = (text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded!");
  };

  const generateVideo = async () => {
    setIsGeneratingVideo(true);
    try {
      toast.info("Generating AI avatar video with D-ID... This may take a few minutes.");
      
      const result = await api.generateVideo(lecture.script, {
        provider: 'did',
        voiceId: 'en-US-JennyNeural',
        driverUrl: 'https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg',
        ratio: '16:9'
      });
      
      toast.success("Video generated successfully!");
      
      // Download the video
      const baseUrl = import.meta.env.PROD ? 'http://localhost:5000' : '';
      const videoUrl = `${baseUrl}${result.videoUrl}`;
      const a = document.createElement('a');
      a.href = videoUrl;
      a.download = result.videoUrl.split('/').pop();
      a.click();
    } catch (error) {
      console.error('Video generation error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to generate video');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col glass-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl gradient-text flex items-center justify-between">
            <span>Your AI Lecture Script</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
          <DialogDescription className="text-base">
            <div className="flex gap-4 mt-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {lecture.mode.charAt(0).toUpperCase() + lecture.mode.slice(1)} Mode
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                {lecture.style.charAt(0).toUpperCase() + lecture.style.slice(1)} Style
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                ~{lecture.estimatedDuration} minutes
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                {lecture.wordCount} words
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="script" className="flex-1 overflow-hidden flex flex-col mt-4">
          <TabsList className="grid w-full grid-cols-2 glass-card">
            <TabsTrigger value="script">Lecture Script</TabsTrigger>
            <TabsTrigger value="scenes">Scene Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="script" className="flex-1 overflow-auto mt-4">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-end gap-2 mb-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(lecture.script)}
                  className="glass"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => downloadAsText(lecture.script, 'lecture-script.txt')}
                  className="glass"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-sans">
                  {lecture.script}
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scenes" className="flex-1 overflow-auto mt-4">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-end gap-2 mb-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(lecture.sceneBreakdown)}
                  className="glass"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => downloadAsText(lecture.sceneBreakdown, 'scene-breakdown.txt')}
                  className="glass"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-sans">
                  {lecture.sceneBreakdown}
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={generateVideo}
            disabled={isGeneratingVideo}
            size="lg"
            className="glass bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            <Video className="h-5 w-5 mr-2" />
            {isGeneratingVideo ? "Generating Video..." : "Generate Video"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
