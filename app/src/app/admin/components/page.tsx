import React from 'react';

const ComponentLibraryPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-stone-800 mb-4">EMC Yoga School コンポーネントライブラリ</h2>
        <p className="text-stone-600 mb-8">ブランドガイドラインに沿った統一感のあるUIコンポーネント集</p>
      </div>
      <div className="p-4 border border-stone-200 rounded-lg">
        <div className="font-serif text-stone-800 mb-2">ステータスインジケーター</div>
        <div className="text-sm text-stone-500 mb-4">ユーザーやコンテンツの状態を示すバッジ</div>
        <div className="flex flex-wrap gap-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">アクティブ</span>
          <span className="bg-stone-100 text-stone-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded">非アクティブ</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">視聴中</span>
          <span className="bg-amber-100 text-amber-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">保留中</span>
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">要注意</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">VIP</span>
        </div>
      </div>
      <div className="p-4 border border-stone-200 rounded-lg">
        <div className="font-serif text-stone-800 mb-2">進捗インジケーター</div>
        <div className="text-sm text-stone-500 mb-4">学習進捗を視覚的に表示</div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1"><span>初級レベル</span><span>25%</span></div>
            <div className="w-full bg-stone-200 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: '25%' }}></div></div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1"><span>中級レベル</span><span>60%</span></div>
            <div className="w-full bg-stone-200 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: '60%' }}></div></div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1"><span>上級レベル</span><span>90%</span></div>
            <div className="w-full bg-stone-200 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: '90%' }}></div></div>
          </div>
        </div>
      </div>
      {/* TODO: Add more components as needed from admin_dashboard.html */}
    </div>
  );
};

export default ComponentLibraryPage;
