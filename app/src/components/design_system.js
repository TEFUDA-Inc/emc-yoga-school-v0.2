import React from "react";
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
import { Bell, BookOpen, Play, Clock, User, Leaf } from "lucide-react";

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Leaf className="h-8 w-8 text-emerald-700" />
            <div className="text-3xl font-serif text-stone-800">E.M.C</div>
            <div className="text-sm uppercase tracking-wider text-stone-500">
              YOGA SCHOOL
            </div>
          </div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            地球との調和を大切にし、心と体と魂の変容をサポートするデザインシステム
          </p>
        </div>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              カラーパレット
            </CardTitle>
            <CardDescription>EMC Yoga Schoolのブランドカラー</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-emerald-800 rounded-lg"></div>
                <p className="text-sm font-medium">Deep Forest</p>
                <p className="text-xs text-stone-500">#2D5142</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-emerald-700 rounded-lg"></div>
                <p className="text-sm font-medium">Sage Green</p>
                <p className="text-xs text-stone-500">#3D6152</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-amber-700 rounded-lg"></div>
                <p className="text-sm font-medium">Earth Brown</p>
                <p className="text-xs text-stone-500">#8B7355</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-amber-600 rounded-lg"></div>
                <p className="text-sm font-medium">Terracotta</p>
                <p className="text-xs text-stone-500">#C18856</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              タイポグラフィ
            </CardTitle>
            <CardDescription>見出しと本文のスタイリング</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif text-stone-800 mb-2">
                メインタイトル
              </h1>
              <p className="text-stone-500 text-sm">font-serif, text-4xl</p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-stone-800 mb-2">
                セクションタイトル
              </h2>
              <p className="text-stone-500 text-sm">font-serif, text-2xl</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-stone-800 mb-2">
                小見出し
              </h3>
              <p className="text-stone-500 text-sm">font-medium, text-lg</p>
            </div>
            <div>
              <p className="text-base text-stone-700 mb-2">
                これは基本的な本文テキストです。読みやすく、親しみやすいフォントを使用しています。
              </p>
              <p className="text-stone-500 text-sm">font-sans, text-base</p>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              ボタンコンポーネント
            </CardTitle>
            <CardDescription>
              様々な用途に対応したボタンスタイル
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-700 hover:bg-emerald-800">
                プライマリーボタン
              </Button>
              <Button
                variant="outline"
                className="border-emerald-700 text-emerald-700 hover:bg-emerald-50"
              >
                セカンダリーボタン
              </Button>
              <Button
                variant="ghost"
                className="text-emerald-700 hover:bg-emerald-50"
              >
                ゴーストボタン
              </Button>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                小さなボタン
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              カードコンポーネント
            </CardTitle>
            <CardDescription>
              レッスンカードとコンテンツカードの例
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lesson Card */}
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src="/api/placeholder/400/200"
                    alt="Yoga lesson thumbnail"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium text-lg">
                      ヨーガとは
                    </h3>
                    <div className="flex items-center text-white/80 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      24分
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-6 w-6 text-emerald-700 fill-emerald-700" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <Progress value={75} className="h-1 bg-stone-600/30" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-stone-500 text-sm">
                    第1章 ヨガ哲学・歴史・瞑想
                  </p>
                  <Badge className="mt-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    視聴中
                  </Badge>
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card className="bg-gradient-to-br from-emerald-50 to-amber-50 border-emerald-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-emerald-800 font-serif">
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
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-700">
                          12.5
                        </div>
                        <p className="text-xs text-stone-500">総学習時間</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-700">
                          7
                        </div>
                        <p className="text-xs text-stone-500">連続学習日数</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              ナビゲーション
            </CardTitle>
            <CardDescription>主要なナビゲーション要素</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Header Navigation */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-stone-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-6 w-6 text-emerald-700" />
                    <div className="text-lg font-serif text-stone-800">
                      E.M.C
                    </div>
                    <div className="text-xs uppercase tracking-wider text-stone-500">
                      YOGA SCHOOL
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                      <Bell className="h-5 w-5 text-stone-500" />
                    </Button>
                    <Avatar className="h-8 w-8 border border-stone-200">
                      <AvatarImage src="/api/placeholder/32/32" alt="User" />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="bg-white rounded-lg p-1 shadow-sm border border-stone-200">
                <div className="grid grid-cols-3 gap-1">
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center py-3 bg-emerald-50 text-emerald-700"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    ホーム
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center py-3"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    レッスン
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center py-3"
                  >
                    <User className="h-4 w-4 mr-2" />
                    マイページ
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">
              フォーム要素
            </CardTitle>
            <CardDescription>
              入力フィールドとフォームコンポーネント
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">
                  パスワード
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
                ログイン
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesignSystem;
