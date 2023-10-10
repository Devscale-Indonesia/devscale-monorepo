'use client';

import { Button } from '@devscale/shared-ui';
import { Menu } from 'lucide-react';
import Avatar from 'boring-avatars';
import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { pocketbase } from '../../../../utils/pocketbase';

export const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const ref: any = useClickAway(() => {
    setOpen(false);
  });
  const user = pocketbase.authStore.model;

  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <Avatar size={32} name="@indrazm" variant="beam" colors={['#f97316', '#fdba74']} />
        <p className="text-xs text-white">@{user?.username}</p>
      </div>
      <div className="relative">
        {open ? (
          <div ref={ref} className="w-[190px] shadow-2xl bg-background-900/20 rounded-lg absolute bottom-12 right-0">
            <Button color="ghost">Edit Profile</Button>
            <Button color="ghost">Log out</Button>
          </div>
        ) : null}
        <Button onClick={() => setOpen(!open)} color="secondary" className="w-fit p-2">
          <Menu size={14} />
        </Button>
      </div>
    </div>
  );
};
