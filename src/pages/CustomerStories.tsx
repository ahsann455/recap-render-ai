import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Video, TrendingUp, Clock } from "lucide-react";

const stories = [
  {
    name: "Dr. Sarah Chen",
    role: "Professor of Biology, Stanford University",
    image: "👩‍🏫",
    story: "PreplitAI has transformed how I create lecture content. I can now generate comprehensive video lectures from my research papers in minutes, allowing me to spend more time with students.",
    metric: "5 hours saved per week",
    icon: Clock
  },
  {
    name: "Michael Rodriguez",
    role: "Online Course Creator",
    image: "👨‍💼",
    story: "I've scaled my course production by 10x. What used to take me days now takes hours. The AI-generated scripts are professional and engaging, and I can customize every detail.",
    metric: "10x increase in output",
    icon: TrendingUp
  },
  {
    name: "Tech Academy Team",
    role: "Corporate Training Provider",
    image: "🏢",
    story: "We use PreplitAI to convert our training materials into video lectures for employees. The consistency and quality have dramatically improved our L&D programs.",
    metric: "500+ videos created",
    icon: Video
  },
  {
    name: "Emily Watson",
    role: "High School Teacher",
    image: "👩‍🎓",
    story: "Creating flipped classroom content used to be overwhelming. Now I can upload my lesson plans and get engaging video lectures that my students love watching before class.",
    metric: "95% student engagement",
    icon: GraduationCap
  },
  {
    name: "David Park",
    role: "Medical Education Director",
    image: "👨‍⚕️",
    story: "The ability to convert complex medical textbooks into clear, narrated video lectures has been invaluable for our residents. The learning outcomes have improved significantly.",
    metric: "40% better retention",
    icon: BookOpen
  },
  {
    name: "Learning Hub Inc.",
    role: "EdTech Startup",
    image: "🚀",
    story: "PreplitAI powers our entire video library. We've been able to launch in multiple languages and scale to thousands of students without hiring a video production team.",
    metric: "15 languages supported",
    icon: Users
  }
];

const CustomerStories = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
          Customer <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          See how educators, creators, and organizations use PreplitAI to transform their content into engaging video lectures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, i) => {
          const Icon = story.icon;
          return (
            <Card key={i} className="border-2 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">{story.image}</div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">{story.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{story.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  "{story.story}"
                </p>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{story.metric}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
        <div className="p-6">
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Video Lectures Created</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Educational Institutions</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">1M+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Students Reached</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default CustomerStories;
