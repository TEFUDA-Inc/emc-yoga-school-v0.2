export const stats = {
  totalUsers: 42,
  activeUsers: 38,
  totalLessons: 26,
  completionRate: 68,
  avgWatchTime: 45.2,
  liveSessionAttendance: 89,
};

export const recentUsersData = [
  { id: 1, name: "田中 美咲", email: "tanaka@example.com", joinDate: "2025-01-15", progress: 45, status: "active", lastActive: "2時間前" },
  { id: 2, name: "佐藤 花子", email: "sato@example.com", joinDate: "2025-01-12", progress: 67, status: "active", lastActive: "5分前" },
  { id: 3, name: "山田 由美", email: "yamada@example.com", joinDate: "2025-01-10", progress: 23, status: "inactive", lastActive: "3日前" },
  { id: 4, name: "鈴木 恵子", email: "suzuki@example.com", joinDate: "2025-01-08", progress: 89, status: "active", lastActive: "1時間前" },
];

export const contentStatsData = [
  { id: 1, title: "第1章 ヨガ哲学・歴史・瞑想", type: "chapter", lessons: 8, avgCompletion: 72, views: 156 },
  { id: 2, title: "ヨーガとは", type: "lesson", duration: "24分", completion: 85, views: 42 },
  { id: 3, title: "ヨガの歴史", type: "lesson", duration: "18分", completion: 78, views: 39 },
  { id: 4, title: "2/16 ライブセッション", type: "live", duration: "55分", attendance: 32, views: 28 },
];

export const announcementsData = [
  { id: 1, title: "システムメンテナンスのお知らせ", date: "2025-02-15", status: "draft", priority: "high" },
  { id: 2, title: "新教材の追加について", date: "2025-02-10", status: "published", priority: "medium" },
  { id: 3, title: "ライブセッション変更のお知らせ", date: "2025-02-08", status: "published", priority: "high" },
];

export type User = typeof recentUsersData[0];
export type ContentStat = typeof contentStatsData[0];
export type Announcement = typeof announcementsData[0];
