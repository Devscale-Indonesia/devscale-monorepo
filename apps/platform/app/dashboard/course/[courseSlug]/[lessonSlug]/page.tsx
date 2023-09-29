import React from 'react';
import { LessonSingle } from '../../../../../components/Dashboard/components/Lesson/Lesson.single';
import { pocketbase } from '../../../../../utils/pocketbase';

interface PageProps {
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

async function getSingleLesson(lessonSlug: string) {
  const response = await pocketbase.collection('courses_lesson').getFirstListItem(`slug="${lessonSlug}"`);
  return response;
}

export default async function Page({ params }: PageProps) {
  const data = await getSingleLesson(params.lessonSlug);
  const { title, videoId, material, created, updated } = data;

  return <LessonSingle videoId={videoId} title={title} />;
}
