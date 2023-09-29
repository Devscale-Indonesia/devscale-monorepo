import { Button } from '@devscale/shared-ui';
import Iframe from 'react-iframe';

interface LessonSingleProps {
  videoId: string;
  title: string;
}

export const LessonSingle = ({ title, videoId }: LessonSingleProps) => {
  return (
    <main>
      <div className="bg-black">
        <Iframe url={`https://iframe.mediadelivery.net/embed/136884/${videoId}`} width="100%" height="680px" display="block" position="relative" />
      </div>
      <div className="p-8 flex justify-between items-end">
        <h4>{title}</h4>
        <Button className="w-fit">Mark as completed</Button>
      </div>
    </main>
  );
};
