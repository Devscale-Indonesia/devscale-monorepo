import Avatar from 'boring-avatars';
import { Card } from '@devscale/shared-ui';

export const BootcampProfile = () => {
  return (
    <Card className="h-full">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h5>Student Profile</h5>
        </div>
        <div className="grid grid-cols-3 items-center">
          <div className="flex gap-4 items-center col-span-2">
            <Avatar size={60} name="Indra Zulfi" variant="marble" colors={['#34d399', '#a5b4fc']} />
            <div>
              <div className="text-white">Indra Zulfi Mushoddaq</div>
              <div className="link text-sm">@indrazm</div>
            </div>
          </div>
          <div className="grid grid-cols-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((day, index) => {
              return (
                <div className="flex flex-col items-center gap-2" key={index}>
                  <div className="h-3 w-3 bg-gradient-to-br from-orange-500 to-orange-300 rounded"></div>
                  <div className="w-fit">{day}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};
