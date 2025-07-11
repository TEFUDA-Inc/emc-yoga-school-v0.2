import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-stone-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-emerald-700"
            >
              <path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10z"></path>
              <path d="M12 2a7 7 0 0 1 7 7h2a10 10 0 0 0-10-10z"></path>
            </svg>
            <div className="text-2xl font-serif text-stone-800">E.M.C</div>
            <div className="text-sm uppercase tracking-wider text-stone-500">
              YOGA SCHOOL
            </div>
          </div>
          <p className="text-stone-600">ヨガの学びの旅を始めましょう</p>
        </div>
        <div className="rounded-lg border bg-white text-card-foreground shadow-lg">
          <div className="p-6 text-center">
            <h3 className="text-xl font-serif text-stone-800">ログイン</h3>
            <p className="text-sm text-stone-500 mt-1">
              アカウントにサインインしてください
            </p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <label
                className="text-sm font-medium text-stone-700 block mb-1 text-left"
                htmlFor="email"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                placeholder="your-email@example.com"
                className="mt-1 flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-stone-700 block mb-1 text-left"
                htmlFor="password"
              >
                パスワード
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="mt-1 flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800">
              ログイン
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 pt-0 text-center">
            <button className="text-sm text-stone-500 hover:text-stone-700">
              パスワードをお忘れですか？
            </button>
            <p className="text-xs text-stone-500">
              アカウントをお持ちでない場合は管理者にお問い合わせください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
