import Avatar from 'boring-avatars';
import { Card } from '@devscale/shared-ui';

export const BootcampProfile = () => {
  return (
    <Card className="h-fit">
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center col-span-4">
          <Avatar size={48} name="@indrazm" variant="beam" colors={['#f97316', '#fdba74']} />
          <div className="space-y-2">
            <div>
              <div className="text-white">Indra Zulfi Mushoddaq</div>
              <div className="link text-xs">@indrazm</div>
            </div>
            <div className="grid grid-cols-8 gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((day, index) => {
                return <div key={index} className="h-[10px] w-[10px] bg-gradient-to-br from-orange-500 to-orange-300 rounded"></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
