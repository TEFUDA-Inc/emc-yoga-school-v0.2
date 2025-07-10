/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1Z6gJ7A3jYp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MainPagesUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-600">E.M.C YOGA SCHOOL</h1>
        <p className="text-gray-500 dark:text-gray-400">ヨガの学びの旅を始めましょう</p>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">ログイン</CardTitle>
          <CardDescription>アカウントにサインインしてください</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="your-email@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">パスワード</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">ログイン</Button>
          <div className="flex justify-between text-sm">
            <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
              パスワードをお忘れですか？
            </a>
            <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
              アカウントをお持ちでない場合は管理者にお問い合わせください
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
