import { Card } from '@devscale/shared-ui';
import Avatar from 'boring-avatars';

interface LeaderboardCardProps {
  fullname: string;
  username: string;
  point: number;
  batch?: string;
}

export const LeaderboardCard = ({ fullname, username, batch, point }: LeaderboardCardProps) => {
  return (
    <Card>
      <div className="grid grid-cols-5 items-center">
        <div className="flex items-center gap-4 col-span-3">
          <Avatar size={40} name={fullname} variant="beam" colors={['#f97316', '#fdba74']} />
          <div>
            <h6>{fullname}</h6>
            <div className="link text-xs">@{username}</div>
          </div>
        </div>
        <div className="flex justify-end">{batch}</div>
        <div className="flex justify-end">
          <div className="flex gap-1 items-baseline bg-gradient-to-r from-orange-500 to-orange-300 w-fit bg-clip-text text-transparent font-bold text-2xl tracking-tight">
            <div>{point}</div>
            <span className="text-sm">pts</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
