
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Clock, CheckCircle, PlayCircle, Play } from 'lucide-react';

const ChapterDetailPage = () => {

  const chapterData = {
    title: "第1章 ヨガ哲学・歴史・瞑想",
    description: "ヨガの根源的な問いに触れ、その歴史的背景と哲学的思想を学びます。瞑想の実践を通じて、自己との対話を深めるための基礎を築きます。",
    progress: 50,
    completedLessons: 4,
    totalLessons: 8,
  };

  const lessons = [
    { id: 1, title: "1. ヨーガとは", duration: "24分", status: "completed" },
    { id: 2, title: "2. ヨガの歴史", duration: "18分", status: "inprogress", progress: 75 },
    { id: 3, title: "3. 八支則について", duration: "32分", status: "notstarted" },
    { id: 4, title: "4. アシュタンガヨガの基礎", duration: "28分", status: "notstarted" },
    // ... more lessons
  ];

  const LessonItemIcon = ({ status }) => {
    if (status === 'completed') {
      return (
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <CheckCircle className="h-5 w-5" />
        </div>
      );
    }
    if (status === 'inprogress') {
      return (
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
          <Play className="h-5 w-5 fill-white" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center font-medium">
        {/* This would be the lesson number */}
        {lessons.findIndex(l => l.status === 'notstarted') + 1}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header would be imported and used here */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" className="text-sm text-stone-500 hover:text-stone-800 px-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              レッスン一覧に戻る
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-serif text-stone-800">{chapterData.title}</h1>
            <p className="mt-2 text-stone-600 leading-relaxed">{chapterData.description}</p>
            <div className="mt-4 flex items-center space-x-4">
              <Progress value={chapterData.progress} className="h-2.5" />
              <div className="text-sm font-medium text-stone-700 whitespace-nowrap">
                {chapterData.completedLessons} / {chapterData.totalLessons} 完了
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-stone-100">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className={`flex items-center p-4 ${lesson.status === 'inprogress' ? 'bg-emerald-50 border-l-4 border-emerald-600' : 'hover:bg-stone-50 cursor-pointer'}`}>
                    <div className="mr-4 flex-shrink-0">
                      <LessonItemIcon status={lesson.status} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm font-medium ${lesson.status === 'inprogress' ? 'text-emerald-800' : 'text-stone-800'}`}>{lesson.title}</h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {lesson.duration}
                      </p>
                      {lesson.status === 'inprogress' && (
                        <Progress value={lesson.progress} className="h-1 mt-2" />
                      )}
                    </div>
                    <Button variant="ghost" size="icon" className={`${lesson.status === 'notstarted' ? 'text-stone-400' : 'text-emerald-700'} hover:text-emerald-700`}>
                      <PlayCircle className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ChapterDetailPage;
