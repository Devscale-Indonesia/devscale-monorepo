import { CourseCard } from '../../../../platform/components/Dashboard/components/Course/Course.Card';
import { Button } from '@devscale/shared-ui';
import { pocketbase } from '../../../utils/pocketbase';

async function getAllCourses() {
  const response = await pocketbase.collection('courses').getFullList();
  return response;
}

export default async function Page() {
  const courses = await getAllCourses();
  console.log(courses);

  return (
    <main className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3>Courses</h3>
          <p>Here is the list of current available courses</p>
        </div>
        <Button size="sm" color="secondary" className="w-fit">
          Request Courses
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-12">
        {courses.map((item) => {
          const url = pocketbase.files.getUrl(item, item.featuredImage);
          return <CourseCard featuredImage={url} key={item.id} title={item.title} slug={item.slug} />;
        })}
      </div>
    </main>
  );
}
