import React from 'react';
import { BookOpenIcon, PlusCircleIcon } from '@/components/icons'; // Assuming icons are in this path

const ContentManagementPage = () => {
  return (
    <div className="text-center py-12">
      <div className="w-12 h-12 text-stone-400 mx-auto mb-4">
        <BookOpenIcon className="h-12 w-12" />
      </div>
      <h2 className="text-xl font-serif text-stone-800 mb-2">コンテンツ管理</h2>
      <p className="text-stone-500 mb-4">レッスンとチャプターの管理機能</p>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-700 text-primary-foreground hover:bg-emerald-800 h-10 px-4 py-2">
        <PlusCircleIcon className="h-4 w-4 mr-2" /> 新しいレッスンを作成
      </button>
      {/* TODO: Implement content management features based on admin_dashboard.html */}
    </div>
  );
};

export default ContentManagementPage;
