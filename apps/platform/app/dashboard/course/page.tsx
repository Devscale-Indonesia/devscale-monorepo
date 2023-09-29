import { CourseCard } from '../../../../platform/components/Dashboard/components/Course/Course.Card';
import { Button } from '@devscale/shared-ui';

async function getAllCourses() {
  const response = await fetch('http://localhost:4201/api/v1/course');
  const data = await response.json();
  return data;
}

export default async function Page() {
  // const { data: courses } = await getAllCourses();
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
      {/* <div className="grid grid-cols-2 gap-12">
        {courses.map(({ id, name, slug }: CourseProps) => {
          return <CourseCard key={id} title={name} slug={slug} />;
        })}
      </div> */}
    </main>
  );
}
