'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { DashboardSidebar } from './Dashboard.Sidebar';

interface DashboardTemplateProps {
  children?: React.ReactNode;
  isAdmin?: boolean;
}

export const DashboardTemplate = ({ children, isAdmin = false }: DashboardTemplateProps) => {
  const pathname = usePathname();
  console.log(pathname.split('/'));
  return (
    <main className="flex h-screen">
      <DashboardSidebar isAdmin={isAdmin} />
      {pathname.split('/').length > 4 ? (
        <div className="w-[calc(100vw-240px)] overflow-y-auto">{children} </div>
      ) : (
        <div className="w-[calc(100vw-240px)] p-8 overflow-y-auto">
          <div className="max-w-5xl m-auto my-12">{children}</div>
        </div>
      )}
    </main>
  );
};
