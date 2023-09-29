import { LessonTemplate } from '../../../../../components/Dashboard/components/Lesson/Lesson.template';
import { pocketbase } from '../../../../../utils/pocketbase';

interface PageProps {
  children: React.ReactNode;
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

async function getSingleCourse(courseSlug: string) {
  const response = await pocketbase.collection('courses').getFirstListItem(`slug="${courseSlug}"`, { expand: 'sections,sections.lesson', cache: 'no-store' });
  return response;
}

export default async function Layout({ children, params }: PageProps) {
  const { expand } = await getSingleCourse(params.courseSlug);

  return (
    <LessonTemplate sections={expand?.sections} courseSlug={params.courseSlug}>
      {children}
    </LessonTemplate>
  );
}
