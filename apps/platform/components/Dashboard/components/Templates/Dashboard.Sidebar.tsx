import { Button } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg';
import Link from 'next/link';
import Avatar from 'boring-avatars';
import {
  Menu,
  BarChart2,
  Book,
  Medal,
  Lock,
  Users,
  Bookmark,
  BarChart,
  Video,
  Activity,
  Calendar,
  Trophy,
  Zap,
  PhoneCall,
  MessagesSquare,
  ScrollText,
  Box,
} from 'lucide-react';

const menu: Menu[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <BarChart2 size={17} /> },
  { label: 'Courses', href: '/dashboard/course', icon: <Zap size={17} /> },
  { label: 'Resources', href: '/dashboard/resources', icon: <Box size={17} /> },
  { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: <Medal size={17} /> },
];

const supportMenu: Menu[] = [
  { label: 'Session', href: '/dashboard/session', icon: <PhoneCall size={17} /> },
  { label: 'Mock Interview', href: '/dashboard/interview', icon: <MessagesSquare size={17} /> },
];

const bootcampMenu: Menu[] = [
  { label: 'User Progress', href: '/dashboard/bootcamp', icon: <Activity size={17} /> },
  { label: 'Class Recording', href: '/dashboard/bootcamp/recording', icon: <Video size={17} /> },
  { label: 'Session', href: '/dashboard/bootcamp/session', icon: <Calendar size={17} /> },
  { label: 'Team Leaderboard', href: '/dashboard/bootcamp/leaderboard', icon: <Trophy size={17} /> },
  { label: 'Certificate', href: '/dashboard/bootcamp/certificate', icon: <ScrollText size={17} /> },
];

const adminMenu: Menu[] = [
  { label: 'Courses', href: '/dashboard/admin/courses', icon: <Book size={17} /> },
  { label: 'Resources', href: '/dashboard/admin/resources', icon: <Bookmark size={17} /> },
  { label: 'Bootcamp', href: '/dashboard/admin/bootcamp', icon: <BarChart size={17} /> },
  { label: 'Users', href: '/dashboard/admin/users', icon: <Users size={17} /> },
  { label: 'Session', href: '/dashboard/admin/session', icon: <Lock size={17} /> },
];

interface DashboardSidebarProps {
  isAdmin: boolean;
}

export const DashboardSidebar = ({ isAdmin }: DashboardSidebarProps) => {
  return (
    <aside className="w-[240px] p-6 flex flex-col justify-between h-screen border-r-1.5 border-zinc-900">
      <div className="space-y-6">
        <div className="flex justify-between items-center pl-3">
          <Image alt="Good" src={Logo} width={120} height={240} />
        </div>
        <div className="space-y-2 rounded-xl">
          <div className="w-28 pl-4 text-xs uppercase text-zinc-600">Platform</div>
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
        <div className="space-y-2 rounded-xl">
          <div className="w-28 pl-4 text-xs uppercase text-zinc-600 flex items-center gap-2">
            <div>Sessions</div>
            <div className="bg-slate-100 text-slate-800 py-0.5 px-1 text-[10px] font-bold tracking-tight rounded-full">SOON</div>
          </div>
          <div>
            {supportMenu.map((item, index) => {
              return (
                <Button color="disable" key={index}>
                  <div>{item.icon}</div>
                  <div>{item.label}</div>
                </Button>
              );
            })}
          </div>
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
          <Menu size={14} />
        </Button>
      </div>
    </aside>
  );
};
