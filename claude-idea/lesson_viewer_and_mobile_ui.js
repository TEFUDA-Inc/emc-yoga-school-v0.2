import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowLeft,
  Menu,
  Play,
  Pause,
  Volume2,
  Maximize,
  CheckCircle,
  PlayCircle,
  Clock,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
  Leaf,
  BookOpen,
} from "lucide-react";

const LessonViewer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(5 * 60 + 30); // 5:30
  const [duration] = useState(24 * 60); // 24:00
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);

  // Mock data
  const currentLessonData = {
    id: 1,
    title: "ヨーガとは - 基本概念の理解",
    chapter: "第1章 ヨガ哲学・歴史・瞑想",
    description:
      "ヨーガの語源から始まり、現代におけるヨガの意味と実践について学びます。古代インドの智慧と現代の科学的理解を通じて、ヨガがなぜ心身の健康に効果的なのかを探求します。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "24分",
    progress: 23,
    materials: [
      { id: 1, title: "ヨーガ基本概念チャート", type: "PDF", size: "2.3MB" },
      { id: 2, title: "サンスクリット語彙集", type: "PDF", size: "1.8MB" },
      { id: 3, title: "瞑想ガイド音声", type: "MP3", size: "12.5MB" },
    ],
  };

  const chapterLessons = [
    {
      id: 1,
      title: "ヨーガとは",
      duration: "24分",
      completed: false,
      current: true,
    },
    {
      id: 2,
      title: "ヨガの歴史",
      duration: "18分",
      completed: true,
      current: false,
    },
    {
      id: 3,
      title: "八支則について",
      duration: "32分",
      completed: false,
      current: false,
    },
    {
      id: 4,
      title: "アシュタンガヨガの基礎",
      duration: "28分",
      completed: false,
      current: false,
    },
    {
      id: 5,
      title: "瞑想の実践",
      duration: "20分",
      completed: false,
      current: false,
    },
    {
      id: 6,
      title: "プラーナヤーマ入門",
      duration: "25分",
      completed: false,
      current: false,
    },
    {
      id: 7,
      title: "ヨガ哲学の現代的理解",
      duration: "30分",
      completed: false,
      current: false,
    },
    {
      id: 8,
      title: "第1章のまとめ",
      duration: "15分",
      completed: false,
      current: false,
    },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const nextLesson = () => {
    if (currentLesson < chapterLessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const markComplete = () => {
    console.log("Lesson marked as complete");
  };

  // Mobile Header
  const MobileHeader = () => (
    <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <Leaf className="h-5 w-5 text-emerald-700" />
          <span className="text-sm font-medium text-stone-800">EMC</span>
        </div>
      </div>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] p-0">
          <LessonSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );

  // Lesson Sidebar Component
  const LessonSidebar = () => (
    <div className="h-full bg-stone-50 flex flex-col">
      <div className="p-4 border-b border-stone-200">
        <h2 className="font-serif text-lg text-stone-800 mb-1">レッスン一覧</h2>
        <p className="text-sm text-stone-500">{currentLessonData.chapter}</p>
        <div className="mt-2">
          <Progress value={25} className="h-2" />
          <p className="text-xs text-stone-500 mt-1">2/8 レッスン完了</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {chapterLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                lesson.current
                  ? "bg-emerald-100 border border-emerald-200"
                  : "hover:bg-white border border-transparent"
              }`}
              onClick={() => setCurrentLesson(index)}
            >
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  {lesson.completed ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  ) : lesson.current ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Play className="h-4 w-4 ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-sm font-medium ${
                      lesson.current ? "text-emerald-800" : "text-stone-800"
                    }`}
                  >
                    {lesson.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1 text-stone-400" />
                    <span className="text-xs text-stone-500">
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Video Player Component
  const VideoPlayer = () => (
    <div className="relative bg-black rounded-lg overflow-hidden group">
      <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
        {/* YouTube Player Placeholder */}
        <div className="text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white ml-1" />
            )}
          </div>
          <p className="text-white/80 text-sm">YouTube動画プレイヤー</p>
          <p className="text-white/60 text-xs mt-1">
            実際の実装ではYouTube APIを使用
          </p>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>

          <div className="flex-1">
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 bg-white/20 rounded-full h-1">
                <div
                  className="bg-emerald-500 h-1 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50">
      <MobileHeader />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 h-screen overflow-y-auto sticky top-0">
          <LessonSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-6">
            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-xl font-serif text-stone-800">
                    {currentLessonData.title}
                  </h1>
                  <p className="text-sm text-stone-500">
                    {currentLessonData.chapter}
                  </p>
                </div>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">
                視聴中 {currentLessonData.progress}%
              </Badge>
            </div>

            {/* Mobile Lesson Info */}
            <div className="lg:hidden">
              <h1 className="text-lg font-serif text-stone-800 mb-1">
                {currentLessonData.title}
              </h1>
              <p className="text-sm text-stone-500 mb-2">
                {currentLessonData.chapter}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">
                    {currentLessonData.duration}
                  </span>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800">
                  視聴中 {currentLessonData.progress}%
                </Badge>
              </div>
            </div>

            {/* Video Player */}
            <VideoPlayer />

            {/* Lesson Controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={previousLesson}
                  disabled={currentLesson === 0}
                  className="flex-1 sm:flex-none"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  前のレッスン
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextLesson}
                  disabled={currentLesson === chapterLessons.length - 1}
                  className="flex-1 sm:flex-none"
                >
                  次のレッスン
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <Button
                className="bg-emerald-700 hover:bg-emerald-800"
                onClick={markComplete}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                完了としてマーク
              </Button>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="description">レッスン内容</TabsTrigger>
                <TabsTrigger value="materials">関連資料</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-stone-800">
                      レッスンについて
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700 leading-relaxed">
                      {currentLessonData.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      <h3 className="font-medium text-stone-800">
                        このレッスンで学べること：
                      </h3>
                      <ul className="space-y-2 text-sm text-stone-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          ヨーガの語源と基本的な意味の理解
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          現代ヨガと古典ヨガの違いと共通点
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          心身への効果の科学的根拠
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          日常生活への取り入れ方
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="materials" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-stone-800">
                      関連資料
                    </CardTitle>
                    <CardDescription>
                      このレッスンに関連する補助教材です
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentLessonData.materials.map((material) => (
                        <div
                          key={material.id}
                          className="flex items-center justify-between p-3 bg-stone-50 rounded-lg"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mr-3">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-stone-800">
                                {material.title}
                              </h4>
                              <p className="text-xs text-stone-500">
                                {material.type} • {material.size}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Progress Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-stone-800">
                  学習の進捗
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-600">このレッスンの進捗</span>
                      <span className="text-stone-800 font-medium">
                        {currentLessonData.progress}%
                      </span>
                    </div>
                    <Progress
                      value={currentLessonData.progress}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-600">
                        チャプター全体の進捗
                      </span>
                      <span className="text-stone-800 font-medium">
                        2/8 レッスン完了
                      </span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-stone-200">
                  <div className="text-center">
                    <div className="text-lg font-medium text-emerald-700">
                      24分
                    </div>
                    <p className="text-xs text-stone-500">このレッスン</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-emerald-700">
                      3.2時間
                    </div>
                    <p className="text-xs text-stone-500">チャプター合計</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
