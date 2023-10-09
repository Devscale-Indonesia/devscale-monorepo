'use client';

import { Button } from '@devscale/shared-ui';
import Iframe from 'react-iframe';
import { pocketbase } from '../../../../utils/pocketbase';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface LessonSingleProps {
  videoId: string;
  title: string;
  lessonId: string;
}

export const LessonSingle = ({ title, videoId, lessonId }: LessonSingleProps) => {
  const router = useRouter();

  const markAsCompleted = async () => {
    const user = pocketbase.authStore.model;
    const data = await pocketbase.collection('finished_lesson').create({
      user: user?.id,
      lesson: lessonId,
    });
    if (data) {
      toast.success('Lesson marked as completed');
      router.refresh();
    } else {
      toast.error('Something went wrong');
    }
  };

  return (
    <main>
      <div className="bg-black">
        <Iframe url={`https://iframe.mediadelivery.net/embed/136884/${videoId}`} width="100%" height="680px" display="block" position="relative" />
      </div>
      <div className="p-8 flex justify-between items-end">
        <h4>{title}</h4>
        <Button className="w-fit" onClick={markAsCompleted}>
          Mark as completed
        </Button>
      </div>
    </main>
  );
};
