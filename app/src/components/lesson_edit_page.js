
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, Trash2, UploadCloud, FileText, X } from 'lucide-react';

const LessonEditPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Note: AdminHeader component would be imported and used here */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" className="text-sm text-stone-500 hover:text-stone-800">
              <ChevronLeft className="h-4 w-4 mr-2" />
              コンテンツ管理に戻る
            </Button>
          </div>

          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-serif text-stone-800">レッスン編集</CardTitle>
                <CardDescription className="mt-1">新しいレッスンの作成または既存のレッスン情報の更新</CardDescription>
              </div>
              <Button variant="ghost" className="text-rose-600 hover:bg-rose-50 hover:text-rose-700">
                <Trash2 className="h-4 w-4 mr-2" />
                削除
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <Label htmlFor="title" className="text-sm font-medium text-stone-700 block mb-1.5">レッスンタイトル</Label>
                      <Input id="title" type="text" defaultValue="ヨーガとは - 基本概念の理解" />
                  </div>
                  <div>
                      <Label htmlFor="chapter" className="text-sm font-medium text-stone-700 block mb-1.5">チャプター</Label>
                      <Select defaultValue="chapter1">
                        <SelectTrigger id="chapter">
                            <SelectValue placeholder="チャプターを選択" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="chapter1">第1章 ヨガ哲学・歴史・瞑想</SelectItem>
                            <SelectItem value="chapter2">第2章 アーサナ・解剖学</SelectItem>
                            <SelectItem value="chapter3">第3章 呼吸法・生理学</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
              </div>

              <div>
                  <Label htmlFor="description" className="text-sm font-medium text-stone-700 block mb-1.5">説明文</Label>
                  <Textarea id="description" rows={4} defaultValue="ヨーガの語源から始まり、現代におけるヨガの意味と実践について学びます。古代インドの智慧と現代の科学的理解を通じて、ヨガがなぜ心身の健康に効果的なのかを探求します。" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <Label htmlFor="video-url" className="text-sm font-medium text-stone-700 block mb-1.5">動画URL</Label>
                      <Input id="video-url" type="text" defaultValue="https://www.youtube.com/watch?v=..." />
                  </div>
                  <div>
                      <Label htmlFor="thumbnail-url" className="text-sm font-medium text-stone-700 block mb-1.5">サムネイル画像URL</Label>
                      <Input id="thumbnail-url" type="text" placeholder="https://example.com/image.jpg" />
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <Label htmlFor="duration" className="text-sm font-medium text-stone-700 block mb-1.5">再生時間</Label>
                      <Input id="duration" type="text" defaultValue="24分" />
                  </div>
                  <div>
                      <Label htmlFor="order" className="text-sm font-medium text-stone-700 block mb-1.5">表示順</Label>
                      <Input id="order" type="number" defaultValue="1" />
                  </div>
              </div>

              <div>
                  <Label className="text-sm font-medium text-stone-700 block mb-1.5">関連資料</Label>
                  <div className="rounded-lg border border-dashed border-stone-300 p-6 text-center">
                      <UploadCloud className="mx-auto h-10 w-10 text-stone-400" />
                      <p className="mt-2 text-sm text-stone-600">ここにファイルをドラッグ＆ドロップ</p>
                      <p className="text-xs text-stone-500">または</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-stone-100 hover:bg-stone-200 text-stone-800">
                        ファイルを選択
                      </Button>
                  </div>
                  <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-stone-50 rounded-md border border-stone-200">
                          <div className="flex items-center">
                              <FileText className="h-5 w-5 text-emerald-700 mr-3" />
                              <span className="text-sm font-medium text-stone-800">ヨーガ基本概念チャート.pdf</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                              <X className="h-4 w-4 text-stone-500" />
                          </Button>
                      </div>
                  </div>
              </div>

            </CardContent>
            <CardFooter className="flex items-center justify-end gap-4 border-t pt-6">
              <Button variant="ghost">キャンセル</Button>
              <Button className="bg-emerald-700 hover:bg-emerald-800">レッスンを保存</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LessonEditPage;
