
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Video, CheckCircle, Calendar } from 'lucide-react';

const StudentDetailPage = () => {

  const student = {
    name: "田中 美咲",
    email: "tanaka@example.com",
    joinDate: "2025-01-15",
    lastActive: "2時間前",
    status: "active",
    avatarFallback: "田",
    overallProgress: 45,
    completedLessons: 12,
    totalHours: 28.5,
    liveSessionsAttended: 2,
  };

  const chapterProgress = [
    { id: 1, title: "第1章 ヨガ哲学・歴史・瞑想", completed: 8, total: 8, progress: 100 },
    { id: 2, title: "第2章 アーサナ・解剖学", completed: 4, total: 12, progress: 33 },
    { id: 3, title: "第3章 呼吸法・生理学", completed: 0, total: 6, progress: 0 },
  ];

  const recentActivity = [
    { id: 1, type: 'view', description: '「太陽礼拝のフロー」を視聴開始', time: '2時間前', icon: <Video className="h-4 w-4" /> },
    { id: 2, type: 'complete', description: '「ヨガの歴史」を完了', time: '1日前', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 3, type: 'live', description: 'ライブセッションに参加', time: '3日前', icon: <Calendar className="h-4 w-4" /> },
  ];

  const activityIconBg = {
    view: 'bg-blue-100 text-blue-700',
    complete: 'bg-emerald-100 text-emerald-700',
    live: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Admin Header would be here */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" className="text-sm text-stone-500 hover:text-stone-800 px-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              受講生管理に戻る
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6 flex items-center space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-3xl font-serif text-stone-600 bg-stone-100">{student.avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-serif text-stone-800">{student.name}</h1>
                    <p className="text-sm text-stone-500">{student.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={student.status === 'active' ? 'default' : 'secondary'} className={student.status === 'active' ? 'bg-emerald-100 text-emerald-800' : ''}>{student.status === 'active' ? 'アクティブ' : '非アクティブ'}</Badge>
                    <Button variant="outline">メッセージを送る</Button>
                  </div>
                </div>
                <p className="text-xs text-stone-500 mt-3">参加日: {student.joinDate} | 最終アクセス: {student.lastActive}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader><CardTitle className="font-serif text-stone-800">学習進捗</CardTitle></CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1"><span className="text-stone-600">全体の進捗</span><span className="font-medium text-stone-800">{student.overallProgress}%</span></div>
                    <Progress value={student.overallProgress} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-stone-50 p-3 rounded-lg"><div className="text-xl font-bold text-emerald-700">{student.completedLessons}</div><p className="text-xs text-stone-500 mt-1">完了レッスン</p></div>
                    <div className="bg-stone-50 p-3 rounded-lg"><div className="text-xl font-bold text-emerald-700">{student.totalHours}h</div><p className="text-xs text-stone-500 mt-1">総学習時間</p></div>
                    <div className="bg-stone-50 p-3 rounded-lg"><div className="text-xl font-bold text-emerald-700">{student.liveSessionsAttended}</div><p className="text-xs text-stone-500 mt-1">ライブ参加</p></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="font-serif text-stone-800">チャプター別進捗</CardTitle></CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-stone-100">
                    {chapterProgress.map(chapter => (
                      <div key={chapter.id} className="p-4 flex items-center gap-4">
                        <p className="flex-1 text-sm font-medium">{chapter.title}</p>
                        <div className="w-1/3"><Progress value={chapter.progress} className="h-1.5" /></div>
                        <p className="text-xs text-stone-500">{chapter.completed}/{chapter.total}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader><CardTitle className="font-serif text-stone-800">最近の活動</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {recentActivity.map(activity => (
                      <li key={activity.id} className="flex items-start">
                        <div className={`w-8 h-8 ${activityIconBg[activity.type]} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>{activity.icon}</div>
                        <div>
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-stone-400 mt-0.5">{activity.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDetailPage;
