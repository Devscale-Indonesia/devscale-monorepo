import { Button } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg';
import Link from 'next/link';
import Avatar from 'boring-avatars';
import { LogOut } from 'lucide-react';

interface DashboardSidebarProps {
  menu: Menu[];
  bootcampMenu: Menu[];
  adminMenu: Menu[];
  isAdmin: boolean;
}

export const DashboardSidebar = ({ menu, bootcampMenu, isAdmin, adminMenu }: DashboardSidebarProps) => {
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
        <div className="space-y-2 rounded-xl">
          <div className="w-28 pl-4 text-xs uppercase text-zinc-600">Bootcamp</div>
          <div>
            {bootcampMenu.map((item, index) => {
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
        {isAdmin ? (
          <div className="space-y-2 rounded-xl">
            <div className="w-28 pl-4 text-xs uppercase text-zinc-600">Admin menu</div>
            <div>
              {adminMenu.map((item, index) => {
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
        ) : null}
      </div>
      <div className="flex justify-between items-center pl-4">
        <div className="flex items-center gap-2">
          <Avatar size={32} name="@indrazm" variant="beam" colors={['#f97316', '#fdba74']} />
          <p>@indrazm</p>
        </div>
        <Button color="secondary" className="w-fit p-2">
          <LogOut size={14} />
        </Button>
      </div>
    </aside>
  );
};
