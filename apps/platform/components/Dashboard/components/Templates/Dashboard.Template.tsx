import React from 'react';
import { BarChart2, Book, Medal, Lock, Users, Bookmark, BarChart, Video, Activity, Calendar, Trophy, Zap } from 'lucide-react';
import { DashboardSidebar } from './Dashboard.Sidebar';

const menu: Menu[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <BarChart2 size={17} /> },
  { label: 'Courses', href: '/dashboard/course', icon: <Zap size={17} /> },
  { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: <Medal size={17} /> },
];

const bootcampMenu: Menu[] = [
  { label: 'User Progress', href: '/dashboard/bootcamp', icon: <Activity size={17} /> },
  { label: 'Class Recording', href: '/dashboard/bootcamp/recording', icon: <Video size={17} /> },
  { label: 'Session', href: '/dashboard/bootcamp/session', icon: <Calendar size={17} /> },
  { label: 'Team Leaderboard', href: '/dashboard/bootcamp/leaderboard', icon: <Trophy size={17} /> },
];

const adminMenu: Menu[] = [
  { label: 'Courses', href: '/dashboard/admin/courses', icon: <Book size={17} /> },
  { label: 'Resources', href: '/dashboard/admin/resources', icon: <Bookmark size={17} /> },
  { label: 'Bootcamp', href: '/dashboard/admin/bootcamp', icon: <BarChart size={17} /> },
  { label: 'Users', href: '/dashboard/admin/users', icon: <Users size={17} /> },
  { label: 'Session', href: '/dashboard/admin/session', icon: <Lock size={17} /> },
];

interface DashboardTemplateProps {
  children?: React.ReactNode;
  isAdmin?: boolean;
}

export const DashboardTemplate = ({ children, isAdmin = false }: DashboardTemplateProps) => {
  return (
    <main className="flex h-screen">
      <DashboardSidebar isAdmin={isAdmin} menu={menu} adminMenu={adminMenu} bootcampMenu={bootcampMenu} />
      <div className="w-[calc(100vw-240px)] p-8 overflow-y-auto">
        <div className="max-w-5xl m-auto my-12">{children}</div>
      </div>
    </main>
  );
};
