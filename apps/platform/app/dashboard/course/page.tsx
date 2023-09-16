import { CourseCard } from '../../../../platform/components/Dashboard/components/Course/Course.Card';
import { Button } from '@devscale/shared-ui';

export default async function Page() {
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
      <div className="grid grid-cols-2 gap-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </main>
  );
}
