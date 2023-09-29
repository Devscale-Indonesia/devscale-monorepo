import Avatar from 'boring-avatars';
import { Button, Card } from '@devscale/shared-ui';

export const Profile = () => {
  return (
    <Card className="h-full">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h6>Profile</h6>
          <Button size="sm" color="secondary" className="w-fit">
            Public Profile
          </Button>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex gap-4 items-center">
            <Avatar size={60} name="@indrazm" variant="beam" colors={['#f97316', '#fdba74']} />
            <div>
              <div className="text-white">Indra Zulfi Mushoddaq</div>
              <div className="link text-sm">@indrazm</div>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <h3 className="font-light">98%</h3>
              <div className="font-bold">Frontend</div>
            </div>
            <div>
              <h3 className="font-light">24%</h3>
              <div className="font-bold">Backend</div>
            </div>
            <div>
              <h3 className="font-light">12%</h3>
              <div className="font-bold">UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
