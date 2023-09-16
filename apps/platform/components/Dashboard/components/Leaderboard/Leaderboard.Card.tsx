import { Card } from '@devscale/shared-ui';
import Avatar from 'boring-avatars';

export const LeaderboardCard = () => {
  return (
    <Card>
      <div className="grid grid-cols-5  items-center">
        <div className="flex items-center gap-4 col-span-3">
          <Avatar size={40} name="Indra Zulfi" variant="marble" colors={['#34d399', '#a5b4fc']} />
          <div>
            <div>Indra Zulfi Mushoddaq</div>
            <div className="link">@indrazm</div>
          </div>
        </div>
        <div className="flex justify-end">Batch #1</div>
        <div className="flex justify-end">
          <div className="flex gap-1 items-baseline bg-gradient-to-r from-orange-500 to-orange-300 w-fit bg-clip-text text-transparent font-bold text-2xl tracking-tight">
            <div>160</div>
            <span className="text-sm">pts</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
