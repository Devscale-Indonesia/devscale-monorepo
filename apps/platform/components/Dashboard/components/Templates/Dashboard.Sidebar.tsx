'use client';

import Image from 'next/image';
import { Button } from '@devscale/shared-ui';
import Logo from '../../../../public/logo.svg';

interface DashboardSidebarProps {
  menu: Menu[];
}

export const DashboardSidebar = ({ menu }: DashboardSidebarProps) => {
  return (
    <aside className="w-[240px] p-6 flex flex-col justify-between h-screen border-r-1.5 border-zinc-900">
      <div className="space-y-6">
        <div className="flex justify-between items-center pl-3">
          <Image alt="Good" src={Logo} width={120} height={240} />
        </div>
        <div>
          {menu.map((item, index) => {
            return (
              <Button color="ghost" key={index}>
                <div>{item.icon}</div>
                <div>{item.label}</div>
              </Button>
            );
          })}
        </div>
      </div>
      <div>
        <Button color="ghost">Profile Settings</Button>
        <Button color="ghost">Logout</Button>
      </div>
    </aside>
  );
};
