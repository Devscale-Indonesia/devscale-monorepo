import { Button } from '@devscale/shared-ui';
import { BookMarked, CalendarPlus, Video } from 'lucide-react';

export const BootcampChart = () => {
  return (
    <>
      <div className="space-y-4">
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <CalendarPlus size={16} /> Book Session
        </Button>
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <Video size={16} /> Classroom Recording
        </Button>
        <Button color="secondary" className="flex justify-start gap-4 items-center">
          <BookMarked size={16} />
          Student Materials
        </Button>
      </div>
    </>
  );
};
