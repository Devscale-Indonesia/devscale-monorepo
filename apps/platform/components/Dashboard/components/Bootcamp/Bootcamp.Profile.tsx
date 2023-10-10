import Avatar from 'boring-avatars';
import { Card } from '@devscale/shared-ui';
import { pocketbase } from '../../../../utils/pocketbase';

export const BootcampProfile = () => {
  const user = pocketbase.authStore.model;

  return (
    <Card className="h-fit">
      <div className="flex gap-4 items-center ">
        <Avatar size={48} name="@indrazm" variant="beam" colors={['#f97316', '#fdba74']} />
        <div className="space-y-2 ">
          <div>
            <div className="text-white">{user?.name}</div>
            <div className="link text-xs w-fit">@{user?.username}</div>
          </div>
          <div className="grid grid-cols-8 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((day, index) => {
              return <div key={index} className="h-[10px] w-[10px] bg-gradient-to-br from-slate-800 to-slate-600 rounded"></div>;
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};
