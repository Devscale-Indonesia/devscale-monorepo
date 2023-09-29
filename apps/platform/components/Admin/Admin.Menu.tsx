import { Button } from '@devscale/shared-ui';
import { BookMarked, CalendarPlus, Video } from 'lucide-react';

export const AdminMenu = () => {
  return (
    <>
      <div className="space-y-4">
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <CalendarPlus size={16} /> Session
        </Button>
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <Video size={16} />
          Courses
        </Button>
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <BookMarked size={16} />
          Users
        </Button>
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <BookMarked size={16} />
          Bootcamp
        </Button>
      </div>
    </>
  );
};
