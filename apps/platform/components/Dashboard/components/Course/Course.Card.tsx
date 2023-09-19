import { Button, Card } from '@devscale/shared-ui';
import Link from 'next/link';
import React from 'react';

interface CourseCardProps {
  title: string;
  slug: string;
}

export const CourseCard = ({ title, slug }: CourseCardProps) => {
  return (
    <div>
      <Card className="w-full h-[300px] bg-zinc-800" />
      <div className="py-4 grid grid-cols-3">
        <h6 className="col-span-2 text-zinc-500">{title}</h6>
        <div className="flex items-start justify-end">
          <Link href={`/dashboard/course/${slug}`}>
            <Button color="secondary" size="sm" className="w-fit">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
