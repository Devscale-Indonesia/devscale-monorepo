'use client';

import { Button } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg';
import Link from 'next/link';

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
              <Link href={item.href} key={index}>
                <Button color="ghost">
                  <div>{item.icon}</div>
                  <div>{item.label}</div>
                </Button>
              </Link>
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
