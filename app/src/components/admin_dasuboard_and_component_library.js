"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  BookOpen,
  Play,
  TrendingUp,
  Settings,
  PlusCircle,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
  Calendar,
  Bell,
  Download,
  Leaf,
  BarChart3,
  UserCheck,
  Clock,
  Video,
  FileText,
  AlertCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock data
  const stats = {
    totalUsers: 42,
    activeUsers: 38,
    totalLessons: 26,
    completionRate: 68,
    avgWatchTime: 45.2,
    liveSessionAttendance: 89,
  };

  const recentUsers = [
    {
      id: 1,
      name: "田中 美咲",
      email: "tanaka@example.com",
      joinDate: "2025-01-15",
      progress: 45,
      status: "active",
      lastActive: "2時間前",
    },
    {
      id: 2,
      name: "佐藤 花子",
      email: "sato@example.com",
      joinDate: "2025-01-12",
      progress: 67,
      status: "active",
      lastActive: "5分前",
    },
    {
      id: 3,
      name: "山田 由美",
      email: "yamada@example.com",
      joinDate: "2025-01-10",
      progress: 23,
      status: "inactive",
      lastActive: "3日前",
    },
    {
      id: 4,
      name: "鈴木 恵子",
      email: "suzuki@example.com",
      joinDate: "2025-01-08",
      progress: 89,
      status: "active",
      lastActive: "1時間前",
    },
  ];

  const contentStats = [
    {
      id: 1,
      title: "第1章 ヨガ哲学・歴史・瞑想",
      type: "chapter",
      lessons: 8,
      avgCompletion: 72,
      views: 156,
    },
    {
      id: 2,
      title: "ヨーガとは",
      type: "lesson",
      duration: "24分",
      completion: 85,
      views: 42,
    },
    {
      id: 3,
      title: "ヨガの歴史",
      type: "lesson",
      duration: "18分",
      completion: 78,
      views: 39,
    },
    {
      id: 4,
      title: "2/16 ライブセッション",
      type: "live",
      duration: "55分",
      attendance: 32,
      views: 28,
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "システムメンテナンスのお知らせ",
      date: "2025-02-15",
      status: "draft",
      priority: "high",
    },
    {
      id: 2,
      title: "新教材の追加について",
      date: "2025-02-10",
      status: "published",
      priority: "medium",
    },
    {
      id: 3,
      title: "ライブセッション変更のお知らせ",
      date: "2025-02-08",
      status: "published",
      priority: "high",
    },
  ];

  // Component Library Section
  const ComponentLibrary = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-stone-800 mb-4">
          EMC Yoga School コンポーネントライブラリ
        </h2>
        <p className="text-stone-600 mb-8">
          ブランドガイドラインに沿った統一感のあるUIコンポーネント集
        </p>
      </div>

      {/* Status Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-stone-800">
            ステータスインジケーター
          </CardTitle>
          <CardDescription>
            ユーザーやコンテンツの状態を示すバッジ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              アクティブ
            </Badge>
            <Badge className="bg-stone-100 text-stone-600 hover:bg-stone-100">
              非アクティブ
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              視聴中
            </Badge>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              保留中
            </Badge>
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
              要注意
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
              VIP
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-stone-800">
            進捗インジケーター
          </CardTitle>
          <CardDescription>学習進捗を視覚的に表示</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>初級レベル</span>
              <span>25%</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>中級レベル</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>上級レベル</span>
              <span>90%</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* User Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-stone-800">
            ユーザーカード
          </CardTitle>
          <CardDescription>受講生情報の表示形式</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/api/placeholder/48/48" alt="User" />
                  <AvatarFallback>田中</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium text-stone-800">田中 美咲</h3>
                  <p className="text-sm text-stone-500">tanaka@example.com</p>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">
                      アクティブ
                    </Badge>
                    <span className="text-xs text-stone-400 ml-2">
                      45% 完了
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/api/placeholder/48/48" alt="User" />
                  <AvatarFallback>佐藤</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium text-stone-800">佐藤 花子</h3>
                  <p className="text-sm text-stone-500">sato@example.com</p>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs">
                      視聴中
                    </Badge>
                    <span className="text-xs text-stone-400 ml-2">
                      67% 完了
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Forms */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-stone-800">
            フォーム要素
          </CardTitle>
          <CardDescription>
            データ入力・編集用のフォームコンポーネント
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lesson-title">レッスンタイトル</Label>
              <Input id="lesson-title" placeholder="レッスンのタイトルを入力" />
            </div>
            <div>
              <Label htmlFor="duration">再生時間</Label>
              <Input id="duration" placeholder="例: 24分" />
            </div>
          </div>
          <div>
            <Label htmlFor="description">説明文</Label>
            <Textarea
              id="description"
              placeholder="レッスンの詳細な説明を入力してください"
            />
          </div>
          <div>
            <Label htmlFor="category">カテゴリー</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="カテゴリーを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="philosophy">哲学・瞑想</SelectItem>
                <SelectItem value="asana">アーサナ・解剖学</SelectItem>
                <SelectItem value="breathing">呼吸法・生理学</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Overview Dashboard
  const OverviewDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-serif text-stone-800">
            管理者ダッシュボード
          </h1>
          <p className="text-stone-500">EMC Yoga School の運営状況</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            レポート出力
          </Button>
          <Button size="sm" className="bg-emerald-700 hover:bg-emerald-800">
            <PlusCircle className="h-4 w-4 mr-2" />
            新規作成
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">総受講生数</p>
                <p className="text-2xl font-bold text-emerald-700">
                  {stats.totalUsers}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-emerald-600">+3</span> 今月
                </p>
              </div>
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">
                  アクティブユーザー
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {stats.activeUsers}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-blue-600">90%</span> アクティブ率
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">
                  総レッスン数
                </p>
                <p className="text-2xl font-bold text-amber-700">
                  {stats.totalLessons}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-amber-600">+2</span> 今週
                </p>
              </div>
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">平均完了率</p>
                <p className="text-2xl font-bold text-purple-700">
                  {stats.completionRate}%
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-purple-600">+5%</span> 先月比
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">
                  平均視聴時間
                </p>
                <p className="text-2xl font-bold text-green-700">
                  {stats.avgWatchTime}分
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-green-600">+8%</span> 先月比
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">
                  ライブ参加率
                </p>
                <p className="text-2xl font-bold text-red-700">
                  {stats.liveSessionAttendance}%
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  <span className="text-red-600">-2%</span> 先月比
                </p>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Video className="h-6 w-6 text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              最近の受講生
            </CardTitle>
            <CardDescription>新規登録・アクティブユーザー</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/api/placeholder/40/40"
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-medium text-stone-800">
                        {user.name}
                      </h3>
                      <p className="text-xs text-stone-500">{user.email}</p>
                      <div className="flex items-center mt-1">
                        <Badge
                          className={`text-xs ${
                            user.status === "active"
                              ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                              : "bg-stone-100 text-stone-600 hover:bg-stone-100"
                          }`}
                        >
                          {user.status === "active"
                            ? "アクティブ"
                            : "非アクティブ"}
                        </Badge>
                        <span className="text-xs text-stone-400 ml-2">
                          {user.progress}% 完了
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-400">{user.lastActive}</p>
                    <Button variant="ghost" size="sm" className="mt-1">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              コンテンツ統計
            </CardTitle>
            <CardDescription>
              レッスンとチャプターのパフォーマンス
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentStats.map((content) => (
                <div
                  key={content.id}
                  className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                        content.type === "chapter"
                          ? "bg-emerald-100 text-emerald-700"
                          : content.type === "lesson"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {content.type === "chapter" ? (
                        <BookOpen className="h-5 w-5" />
                      ) : content.type === "lesson" ? (
                        <Play className="h-5 w-5" />
                      ) : (
                        <Video className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-stone-800">
                        {content.title}
                      </h3>
                      <p className="text-xs text-stone-500">
                        {content.type === "chapter"
                          ? `${content.lessons} レッスン`
                          : content.type === "live"
                          ? `参加者 ${content.attendance}名`
                          : content.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-stone-800">
                      {content.type === "chapter"
                        ? `${content.avgCompletion}%`
                        : content.type === "live"
                        ? `${content.attendance}名`
                        : `${content.completion}%`}
                    </p>
                    <p className="text-xs text-stone-400">
                      {content.views} 視聴
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements Management */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-stone-800">
            お知らせ管理
          </CardTitle>
          <CardDescription>受講生への通知とアナウンス</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-center justify-between p-3 border border-stone-200 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      announcement.priority === "high"
                        ? "bg-red-500"
                        : announcement.priority === "medium"
                        ? "bg-amber-500"
                        : "bg-green-500"
                    }`}
                  ></div>
                  <div>
                    <h3 className="text-sm font-medium text-stone-800">
                      {announcement.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        className={`text-xs ${
                          announcement.status === "published"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {announcement.status === "published"
                          ? "公開中"
                          : "下書き"}
                      </Badge>
                      <span className="text-xs text-stone-400">
                        {announcement.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // User Management
  const UserManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-serif text-stone-800">受講生管理</h1>
          <p className="text-stone-500">受講生の学習状況と管理</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
            <Input placeholder="受講生を検索..." className="pl-9 w-64" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            フィルター
          </Button>
        </div>
      </div>

      {/* User List */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="text-left p-4 font-medium text-stone-800">
                    受講生
                  </th>
                  <th className="text-left p-4 font-medium text-stone-800">
                    ステータス
                  </th>
                  <th className="text-left p-4 font-medium text-stone-800">
                    進捗
                  </th>
                  <th className="text-left p-4 font-medium text-stone-800">
                    最終アクセス
                  </th>
                  <th className="text-left p-4 font-medium text-stone-800">
                    参加日
                  </th>
                  <th className="text-right p-4 font-medium text-stone-800">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-stone-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src="/api/placeholder/40/40"
                            alt={user.name}
                          />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-stone-800">
                            {user.name}
                          </h3>
                          <p className="text-sm text-stone-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${
                          user.status === "active"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {user.status === "active"
                          ? "アクティブ"
                          : "非アクティブ"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Progress value={user.progress} className="w-24 h-2" />
                        <span className="text-sm text-stone-600">
                          {user.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-stone-600">
                        {user.lastActive}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-stone-600">
                        {user.joinDate}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* User Detail Modal */}
      {selectedUser && (
        <Card className="fixed inset-4 bg-white shadow-2xl rounded-lg z-50 overflow-y-auto">
          <CardHeader className="border-b border-stone-200">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-serif text-stone-800">
                  受講生詳細
                </CardTitle>
                <CardDescription>
                  {selectedUser.name}さんの学習状況
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-stone-800 mb-4">基本情報</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-500">名前</span>
                    <span className="text-stone-800">{selectedUser.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">メール</span>
                    <span className="text-stone-800">{selectedUser.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">参加日</span>
                    <span className="text-stone-800">
                      {selectedUser.joinDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">最終アクセス</span>
                    <span className="text-stone-800">
                      {selectedUser.lastActive}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-4">学習進捗</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-stone-600">全体の進捗</span>
                      <span className="text-stone-800">
                        {selectedUser.progress}%
                      </span>
                    </div>
                    <Progress value={selectedUser.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-medium text-emerald-700">
                        6
                      </div>
                      <p className="text-xs text-stone-500">完了レッスン</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-medium text-emerald-700">
                        12.5h
                      </div>
                      <p className="text-xs text-stone-500">総視聴時間</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Leaf className="h-6 w-6 text-emerald-700" />
              <div className="text-xl font-serif text-stone-800">E.M.C</div>
              <div className="text-xs uppercase tracking-wider text-stone-500">
                ADMIN
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-stone-500" />
              </Button>
              <Avatar className="h-8 w-8 border border-stone-200">
                <AvatarImage src="/api/placeholder/32/32" alt="Admin" />
                <AvatarFallback>管理</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Admin Navigation */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full mt-4"
          >
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview" className="text-xs">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">概要</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="text-xs">
                <Users className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">受講生</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="text-xs">
                <BookOpen className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">コンテンツ</span>
              </TabsTrigger>
              <TabsTrigger value="components" className="text-xs">
                <Settings className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">コンポーネント</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {activeTab === "overview" && <OverviewDashboard />}
        {activeTab === "users" && <UserManagement />}
        {activeTab === "content" && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-stone-400 mx-auto mb-4" />
            <h2 className="text-xl font-serif text-stone-800 mb-2">
              コンテンツ管理
            </h2>
            <p className="text-stone-500 mb-4">
              レッスンとチャプターの管理機能
            </p>
            <Button className="bg-emerald-700 hover:bg-emerald-800">
              <PlusCircle className="h-4 w-4 mr-2" />
              新しいレッスンを作成
            </Button>
          </div>
        )}
        {activeTab === "components" && <ComponentLibrary />}
      </main>
    </div>
  );
};

export default AdminDashboard;
