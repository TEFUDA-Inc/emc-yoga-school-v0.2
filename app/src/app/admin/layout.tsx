'use client'; // Add this directive for client-side interactivity (useState, useEffect

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // To determine active tab
import {
  LeafIcon,
  BellIcon,
  BarChart3Icon,
  UsersIcon,
  BookOpenIcon,
  SettingsIcon,
} from '@/components/icons'; // Assuming icons are in this path

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname.split('/')[2] || 'overview');

  const navItems = [
    { id: 'overview', label: '概要', href: '/admin', icon: <BarChart3Icon className="h-4 w-4 mr-1" /> },
    { id: 'users', label: '受講生', href: '/admin/users', icon: <UsersIcon className="h-4 w-4 mr-1 text-emerald-700" /> }, // Adjusted icon class
    { id: 'content', label: 'コンテンツ', href: '/admin/content', icon: <BookOpenIcon className="h-4 w-4 mr-1 text-amber-700" /> }, // Adjusted icon class
    { id: 'components', label: 'コンポーネント', href: '/admin/components', icon: <SettingsIcon className="h-4 w-4 mr-1" /> },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <LeafIcon className="h-6 w-6 text-emerald-700" />
              <div className="text-xl font-serif text-stone-800">E.M.C</div>
              <div className="text-xs uppercase tracking-wider text-stone-500">
                ADMIN
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <BellIcon className="h-5 w-5 text-stone-500" />
              </button>
              <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-stone-200">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  管
                </span>
              </span>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="grid grid-cols-4 w-full bg-muted p-1 rounded-md">
              {navItems.map((item) => (
                <Link href={item.href} key={item.id} legacyBehavior>
                  <a
                    onClick={() => setActiveTab(item.id)}
                    className={`tab-trigger inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                      activeTab === item.id
                        ? 'bg-background text-foreground shadow-sm'
                        : ''
                    }`}
                    data-state={activeTab === item.id ? 'active' : ''}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
