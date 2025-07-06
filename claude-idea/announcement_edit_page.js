
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from 'lucide-react';

const AnnouncementEditPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Admin Header would be imported and used here */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" className="text-sm text-stone-500 hover:text-stone-800 px-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              お知らせ管理に戻る
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-stone-800">お知らせ編集</CardTitle>
              <p className="text-sm text-stone-500 mt-1">受講生へのお知らせを作成または編集します</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-sm font-medium text-stone-700 block mb-1.5">タイトル</Label>
                <Input id="title" type="text" defaultValue="新教材の追加について" />
              </div>

              <div>
                <Label htmlFor="content" className="text-sm font-medium text-stone-700 block mb-1.5">内容</Label>
                <Textarea id="content" rows={6} defaultValue="第2章「アーサナ・解剖学」に新しいレッスン「太陽礼拝のフロー」と関連資料を追加しました。マイページのレッスン一覧からご確認ください。" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="important-check" />
                <Label htmlFor="important-check" className="text-sm font-medium text-stone-700">重要なお知らせとしてマークする</Label>
              </div>

              <div>
                <Label className="text-sm font-medium text-stone-700 block mb-1.5">公開ステータス</Label>
                <div className="flex gap-4">
                    <Button variant="outline">下書きとして保存</Button>
                    <Button className="bg-emerald-700 hover:bg-emerald-800">すぐに公開</Button>
                </div>
              </div>

            </CardContent>
            <CardFooter className="flex items-center justify-between gap-4 border-t pt-6">
                <p className="text-xs text-stone-500">最終保存: 2025/02/10 15:30 (下書き)</p>
                <div className="flex gap-4">
                    <Button variant="ghost">キャンセル</Button>
                    <Button className="bg-emerald-700 hover:bg-emerald-800">お知らせを更新</Button>
                </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnnouncementEditPage;
