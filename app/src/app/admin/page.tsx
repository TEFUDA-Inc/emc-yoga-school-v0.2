'use client';
import React from 'react';
import {
  UsersIcon,
  BookOpenIcon,
  PlayIcon,
  TrendingUpIcon,
  SettingsIcon,
  PlusCircleIcon,
  SearchIcon,
  FilterIcon,
  MoreHorizontalIcon,
  EditIcon,
  EyeIcon,
  DownloadIcon,
  UserCheckIcon,
  ClockIcon,
  VideoIcon,
} from '@/components/icons'; // Ensure all used icons are imported
import { stats, recentUsersData, contentStatsData, User, ContentStat } from '@/lib/admin_mock_data';

const OverviewDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-serif text-stone-800">管理者ダッシュボード</h1>
          <p className="text-stone-500">EMC Yoga School の運営状況</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
            <DownloadIcon className="h-4 w-4 mr-2" /> レポート出力
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-700 text-primary-foreground hover:bg-emerald-800 h-9 px-3">
            <PlusCircleIcon className="h-4 w-4 mr-2" /> 新規作成
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">総受講生数</p>
                <p className="text-2xl font-bold text-emerald-700">{stats.totalUsers}</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-emerald-600">+3</span> 今月</p>
              </div>
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-emerald-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">アクティブユーザー</p>
                <p className="text-2xl font-bold text-blue-700">{stats.activeUsers}</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-blue-600">90%</span> アクティブ率</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheckIcon className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">総レッスン数</p>
                <p className="text-2xl font-bold text-amber-700">{stats.totalLessons}</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-amber-600">+2</span> 今週</p>
              </div>
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <BookOpenIcon className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">平均完了率</p>
                <p className="text-2xl font-bold text-purple-700">{stats.completionRate}%</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-purple-600">+5%</span> 先月比</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUpIcon className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">平均視聴時間</p>
                <p className="text-2xl font-bold text-green-700">{stats.avgWatchTime}分</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-green-600">+8%</span> 先月比</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ClockIcon className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-500">ライブ参加率</p>
                <p className="text-2xl font-bold text-red-700">{stats.liveSessionAttendance}%</p>
                <p className="text-xs text-stone-400 mt-1"><span className="text-red-600">-2%</span> 先月比</p>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                <VideoIcon className="h-6 w-6 text-red-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6"><h3 className="font-semibold leading-none tracking-tight font-serif text-stone-800">最近の受講生</h3><p className="text-sm text-muted-foreground">新規登録・アクティブユーザー</p></div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {recentUsersData.map((user: User) => (
                <div key={user.id} className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><span className="flex h-full w-full items-center justify-center rounded-full bg-muted">{user.name.charAt(0)}</span></span>
                    <div>
                      <h3 className="text-sm font-medium text-stone-800">{user.name}</h3>
                      <p className="text-xs text-stone-500">{user.email}</p>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs ${user.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600'} inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}>{user.status === 'active' ? 'アクティブ' : '非アクティブ'}</span>
                        <span className="text-xs text-stone-400 ml-2">{user.progress}% 完了</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-400">{user.lastActive}</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 mt-1">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6"><h3 className="font-semibold leading-none tracking-tight font-serif text-stone-800">コンテンツ統計</h3><p className="text-sm text-muted-foreground">レッスンとチャプターのパフォーマンス</p></div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {contentStatsData.map((content: ContentStat) => (
                <div key={content.id} className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${content.type === 'chapter' ? 'bg-emerald-100 text-emerald-700' : content.type === 'lesson' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                      {content.type === 'chapter' ? <BookOpenIcon className="h-5 w-5" /> : content.type === 'lesson' ? <PlayIcon className="h-5 w-5" /> : <VideoIcon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-stone-800">{content.title}</h3>
                      <p className="text-xs text-stone-500">{content.type === 'chapter' ? `${content.lessons} レッスン` : content.type === 'live' ? `参加者 ${content.attendance}名` : content.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-stone-800">{content.type === 'chapter' ? `${content.avgCompletion}%` : content.type === 'live' ? `${content.attendance}名` : `${content.completion}%`}</p>
                    <p className="text-xs text-stone-400">{content.views} 視聴</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;
