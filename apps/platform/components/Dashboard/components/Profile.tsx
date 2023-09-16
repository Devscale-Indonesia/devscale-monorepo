import Avatar from 'boring-avatars';
import { Card } from '@devscale/shared-ui';

export const Profile = () => {
  return (
    <Card>
      <div className="space-y-5">
        <h5>Profile</h5>
        <div className="grid grid-cols-2">
          <div className="flex gap-4 items-center">
            <Avatar size={60} name="Indra Zulfi" variant="marble" colors={['#34d399', '#a5b4fc']} />
            <div>
              <div className="text-white">Indra Zulfi Mushoddaq</div>
              <div className="link text-sm">@indrazm</div>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <h1>98%</h1>
              <div>Frontend</div>
            </div>
            <div>
              <h1>24%</h1>
              <div>Backend</div>
            </div>
            <div>
              <h1>12%</h1>
              <div>UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
