import React from 'react';
import Image from 'next/image';
import { Card } from '@devscale/shared-ui';

interface CourseSingleProps {
  id: string;
  name: string;
  description: string;
  prerequirements: string;
  featuredImage: string;
  level: string;
  courseSections: any[];
}

export const CourseSingle = ({ id, name, featuredImage, description, prerequirements, level, courseSections }: CourseSingleProps) => {
  return (
    <main className="grid grid-cols-3 gap-8">
      <div className="col-span-2 space-y-4">
        <h2>{name}</h2>
        <div className="border p-2 bg-emerald-900 border-emerald-300 text-emerald-300 rounded-lg w-fit font-bold text-xs">{level}</div>
        <p>{description}</p>
        <div>{prerequirements}</div>
        <div>{JSON.stringify(courseSections)}</div>
      </div>
      <Card className="p-0 relative h-[400px] overflow-hidden">
        <Image src={`https://devscale.b-cdn.net/course/${id}/${featuredImage}`} fill alt={name} className="object-cover" />
      </Card>
    </main>
  );
};
