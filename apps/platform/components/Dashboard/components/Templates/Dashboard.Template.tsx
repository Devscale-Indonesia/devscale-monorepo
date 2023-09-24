import React from 'react';
import { BarChart2, Book, Medal, Zap } from 'lucide-react';
import { DashboardSidebar } from './Dashboard.Sidebar';

const menu: Menu[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <BarChart2 size={17} /> },
  { label: 'Courses', href: '/dashboard/course', icon: <Book size={17} /> },
  { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: <Medal size={17} /> },
  { label: 'Bootcamp', href: '/dashboard/bootcamp', icon: <Zap size={17} /> },
];

const menuAdmin: Menu[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <BarChart2 size={17} /> },
  { label: 'Courses', href: '/dashboard/course', icon: <Book size={17} /> },
  { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: <Medal size={17} /> },
  { label: 'Bootcamp', href: '/dashboard/bootcamp', icon: <Zap size={17} /> },
  { label: 'Admin', href: '/dashboard/admin', icon: <Zap size={17} /> },
];

interface DashboardTemplateProps {
  children?: React.ReactNode;
  isAdmin?: boolean;
}

export const DashboardTemplate = ({ children, isAdmin = false }: DashboardTemplateProps) => {
  return (
    <main className="flex h-screen">
      <DashboardSidebar menu={isAdmin ? menuAdmin : menu} />
      <div className="w-[calc(100vw-240px)] p-8 overflow-y-auto">
        <div className="max-w-4xl m-auto my-12">{children}</div>
      </div>
    </main>
  );
};
