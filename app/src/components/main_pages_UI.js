import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Bell,
  BookOpen,
  Play,
  Clock,
  User,
  Leaf,
  ChevronRight,
  Video,
  Calendar,
  Search,
  Home,
  Settings,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

const EMCMainPages = () => {
  const [currentPage, setCurrentPage] = useState("login");

  // Mock data
  const chapters = [
    {
      id: 1,
      title: "第1章 ヨガ哲学・歴史・瞑想",
      progress: 50,
      total: 8,
      completed: 4,
    },
    {
      id: 2,
      title: "第2章 アーサナ・解剖学",
      progress: 17,
      total: 12,
      completed: 2,
    },
    {
      id: 3,
      title: "第3章 呼吸法・生理学",
      progress: 0,
      total: 6,
      completed: 0,
    },
  ];

  const recentLessons = [
    {
      id: 1,
      title: "ヨーガとは",
      chapter: "第1章",
      duration: "24分",
      progress: 75,
      thumbnail: "/api/placeholder/300/160",
    },
    {
      id: 2,
      title: "ヨガの歴史",
      chapter: "第1章",
      duration: "18分",
      progress: 100,
      thumbnail: "/api/placeholder/300/160",
    },
    {
      id: 3,
      title: "マインドフルネス入門",
      chapter: "第1章",
      duration: "32分",
      progress: 40,
      thumbnail: "/api/placeholder/300/160",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "次回のライブセッションは2月16日",
      date: "2025-02-10",
      important: true,
    },
    {
      id: 2,
      title: "新しい教材が追加されました",
      date: "2025-02-05",
      important: false,
    },
  ];

  const liveArchives = [
    {
      id: 1,
      title: "2/16 ヨガ哲学Q&Aセッション",
      date: "2025-02-16",
      duration: "55分",
    },
    {
      id: 2,
      title: "1/20 アーサナの基本と呼吸法",
      date: "2025-01-20",
      duration: "65分",
    },
  ];

  // Common Header Component
  const Header = ({ showNavigation = false }) => (
    <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentPage("dashboard")}
          >
            <Leaf className="h-6 w-6 text-emerald-700" />
            <div className="text-xl font-serif text-stone-800">E.M.C</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">
              YOGA SCHOOL
            </div>
          </div>
          {showNavigation && (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-stone-500" />
              </Button>
              <Avatar
                className="h-8 w-8 border border-stone-200"
                onClick={() => setCurrentPage("profile")}
              >
                <AvatarImage src="/api/placeholder/32/32" alt="User" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        {showNavigation && (
          <Tabs
            value={currentPage}
            onValueChange={setCurrentPage}
            className="w-full mt-4"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="dashboard" className="text-xs">
                <Home className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">ホーム</span>
              </TabsTrigger>
              <TabsTrigger value="lessons" className="text-xs">
                <BookOpen className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">レッスン</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="text-xs">
                <User className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">マイページ</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>
    </header>
  );

  // Login Page
  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-stone-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf className="h-8 w-8 text-emerald-700" />
            <div className="text-2xl font-serif text-stone-800">E.M.C</div>
            <div className="text-sm uppercase tracking-wider text-stone-500">
              YOGA SCHOOL
            </div>
          </div>
          <p className="text-stone-600">ヨガの学びの旅を始めましょう</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-serif text-stone-800">
              ログイン
            </CardTitle>
            <CardDescription>
              アカウントにサインインしてください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="your-email@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1"
              />
            </div>
            <Button
              className="w-full bg-emerald-700 hover:bg-emerald-800"
              onClick={() => setCurrentPage("dashboard")}
            >
              ログイン
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 text-center">
            <Button
              variant="link"
              className="text-sm text-stone-500 hover:text-stone-700"
            >
              パスワードをお忘れですか？
            </Button>
            <p className="text-xs text-stone-500">
              アカウントをお持ちでない場合は管理者にお問い合わせください
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="min-h-screen bg-stone-50">
      <Header showNavigation={true} />
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Welcome Banner */}
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 to-emerald-700/70"></div>
          <img
            src="/api/placeholder/1200/300"
            alt="Yoga practice"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
            <h1 className="text-2xl font-serif mb-2">
              おはようございます、Meさん
            </h1>
            <p className="text-sm opacity-90 max-w-md mb-4">
              今日も素晴らしい一日になりますように。あなたの学びの旅を続けましょう。
            </p>
            <Button
              size="sm"
              className="bg-white text-emerald-800 hover:bg-stone-100 w-fit"
            >
              続きから学ぶ
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              学習の進捗
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-stone-600">全体の進捗</span>
                  <span className="text-stone-800 font-medium">
                    6/26 レッスン完了
                  </span>
                </div>
                <Progress value={23} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {chapters.map((chapter) => (
                  <Card
                    key={chapter.id}
                    className="bg-stone-50 border-stone-200"
                  >
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm font-medium text-stone-800 truncate">
                        {chapter.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-0 px-4">
                      <Progress value={chapter.progress} className="h-1.5" />
                      <p className="text-xs text-stone-500 mt-2 text-right">
                        {chapter.completed}/{chapter.total} 完了
                      </p>
                    </CardContent>
                    <CardFooter className="py-2 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-emerald-700 p-0 h-auto"
                      >
                        詳細を見る
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              お知らせ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="flex items-start pb-3 border-b border-stone-100 last:border-0"
                >
                  <div
                    className={`rounded-full p-2 mr-3 ${
                      announcement.important
                        ? "bg-amber-100 text-amber-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <Bell className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-stone-800">
                      {announcement.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {new Date(announcement.date).toLocaleDateString("ja-JP")}
                    </p>
                    {announcement.important && (
                      <Badge className="mt-1 bg-amber-600 hover:bg-amber-600 text-xs">
                        重要
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">
                最近のレッスン
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLessons.map((lesson) => (
                <div key={lesson.id} className="group relative cursor-pointer">
                  <div className="relative rounded-md overflow-hidden">
                    <img
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-sm font-medium text-white">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {lesson.duration}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-2">
                        <Play className="h-6 w-6 text-emerald-700 fill-emerald-700" />
                      </div>
                    </div>
                    {lesson.progress > 0 && lesson.progress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0">
                        <Progress
                          value={lesson.progress}
                          className="h-1 bg-stone-600/30"
                        />
                      </div>
                    )}
                    {lesson.progress === 100 && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-emerald-600 hover:bg-emerald-600">
                          完了
                        </Badge>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    {lesson.chapter}
                  </p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full text-xs">
                すべてのレッスンを見る
              </Button>
            </CardFooter>
          </Card>

          {/* Live Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">
                ライブセッション
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveArchives.map((session) => (
                <div key={session.id} className="group relative cursor-pointer">
                  <div className="relative rounded-md overflow-hidden">
                    <img
                      src="/api/placeholder/300/160"
                      alt={session.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-sm font-medium text-white">
                        {session.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {session.duration}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-2">
                        <Video className="h-6 w-6 text-emerald-700" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">{session.date}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full text-xs">
                すべてのアーカイブを見る
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );

  // Lessons Page
  const LessonsPage = () => (
    <div className="min-h-screen bg-stone-50">
      <Header showNavigation={true} />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-serif text-stone-800">レッスン一覧</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input placeholder="レッスンを検索..." className="pl-9 w-64" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="chapters">
          <TabsList className="bg-stone-100">
            <TabsTrigger value="chapters">チャプター別</TabsTrigger>
            <TabsTrigger value="all">すべてのレッスン</TabsTrigger>
          </TabsList>

          <TabsContent value="chapters" className="mt-6 space-y-6">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="overflow-hidden">
                <CardHeader className="bg-stone-100 border-b border-stone-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base font-medium text-stone-800">
                        {chapter.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        ヨガの基本概念と哲学的背景について学びます
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-stone-800">
                        {chapter.progress}%
                      </div>
                      <p className="text-xs text-stone-500">
                        {chapter.completed}/{chapter.total} 完了
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-stone-100">
                    {Array.from({ length: Math.min(3, chapter.total) }).map(
                      (_, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 hover:bg-stone-50 cursor-pointer"
                        >
                          <div className="mr-3 flex-shrink-0">
                            {i < chapter.completed ? (
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                <CheckCircle className="h-5 w-5" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center">
                                {i + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-stone-800">
                              レッスン {i + 1}: サンプルレッスンタイトル
                            </h3>
                            <p className="text-xs text-stone-500 mt-1 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              約25分
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-emerald-700"
                          >
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-stone-100 bg-stone-50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-emerald-700"
                  >
                    すべてのレッスンを見る ({chapter.total}件)
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentLessons.concat(recentLessons).map((lesson, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-sm font-medium text-white">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {lesson.duration}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-2">
                        <Play className="h-6 w-6 text-emerald-700 fill-emerald-700" />
                      </div>
                    </div>
                    {lesson.progress > 0 && lesson.progress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0">
                        <Progress
                          value={lesson.progress}
                          className="h-1 bg-stone-600/30"
                        />
                      </div>
                    )}
                    {lesson.progress === 100 && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-emerald-600 hover:bg-emerald-600">
                          完了
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <p className="text-xs text-stone-500">{lesson.chapter}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="min-h-screen bg-stone-50">
      <Header showNavigation={true} />
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-stone-200">
            <AvatarImage src="/api/placeholder/64/64" alt="User" />
            <AvatarFallback className="text-lg">ME</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-serif text-stone-800">Meさん</h1>
            <p className="text-sm text-stone-500">受講開始: 2025年1月</p>
            <Badge className="mt-1 bg-emerald-100 text-emerald-800">
              アクティブ受講生
            </Badge>
          </div>
        </div>

        {/* Learning Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              学習の統計
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-stone-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-medium text-emerald-700">6</div>
                <p className="text-xs text-stone-500 mt-1">完了したレッスン</p>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-medium text-emerald-700">
                  12.5
                </div>
                <p className="text-xs text-stone-500 mt-1">総学習時間 (時間)</p>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-medium text-emerald-700">7</div>
                <p className="text-xs text-stone-500 mt-1">連続学習日数</p>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-medium text-emerald-700">2</div>
                <p className="text-xs text-stone-500 mt-1">
                  参加ライブセッション
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              最近の活動
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2 mr-3">
                  <Video className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-800">
                    「ヨーガとは」を視聴しました
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">今日 10:25</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 rounded-full p-2 mr-3">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-800">
                    「ヨガの歴史」を完了しました
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">昨日 15:40</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-700 rounded-full p-2 mr-3">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-800">
                    ライブセッション「アーサナの基本と呼吸法」に参加しました
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">2025年1月20日</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Favorite Lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">
                お気に入りのレッスン
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentLessons.slice(0, 2).map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center cursor-pointer hover:bg-stone-50 p-2 rounded-md -m-2"
                >
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-16 h-12 object-cover rounded-md mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-stone-800">
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {lesson.chapter}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">設定</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs"
                >
                  <User className="h-4 w-4 mr-2" />
                  アカウント情報を編集
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  通知設定
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  パスワード変更
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                >
                  ログアウト
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );

  // Page Router
  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "dashboard":
        return <DashboardPage />;
      case "lessons":
        return <LessonsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}

      {/* Page Selector for Demo */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 border border-stone-200">
        <div className="text-xs text-stone-500 mb-2">デモページ切り替え:</div>
        <div className="flex flex-col space-y-1">
          <Button
            variant={currentPage === "login" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage("login")}
            className="text-xs"
          >
            ログイン
          </Button>
          <Button
            variant={currentPage === "dashboard" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage("dashboard")}
            className="text-xs"
          >
            ダッシュボード
          </Button>
          <Button
            variant={currentPage === "lessons" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage("lessons")}
            className="text-xs"
          >
            レッスン
          </Button>
          <Button
            variant={currentPage === "profile" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage("profile")}
            className="text-xs"
          >
            プロフィール
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EMCMainPages;
