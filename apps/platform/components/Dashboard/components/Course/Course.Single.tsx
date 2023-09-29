import React from 'react';
import Image from 'next/image';
import { Card } from '@devscale/shared-ui';
import Link from 'next/link';

interface CourseSingleProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  prerequirements: string;
  featuredImage: string;
  level: string;
  courseSections: any[];
}

export const CourseSingle = ({ id, name, slug, featuredImage, description, prerequirements, level, courseSections }: CourseSingleProps) => {
  const descriptionHTML = { __html: description };
  console.log(courseSections);
  return (
    <main className="grid grid-cols-3 gap-12">
      <div className="col-span-2 space-y-10">
        <div className="space-y-2">
          <h2>{name}</h2>
          <div dangerouslySetInnerHTML={descriptionHTML} />
        </div>
        <div>{prerequirements}</div>
        <div>
          {courseSections.map((item) => {
            return (
              <div key={item.id} className="space-y-2">
                <h5 className="ml-4">{item.name}</h5>
                <div className="space-y-3">
                  {item.expand.lesson.map((item: any) => {
                    return (
                      <Link href={`/dashboard/course/${slug}/${item.slug}`} key={item.id} className="block">
                        <Card className="py-3 px-4 bg-zinc-900/50 active:opacity-70 hover:text-orange-500 hover:border-orange-500 cursor-pointer transition duration-300">
                          <div>{item.title}</div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Card className="p-0 relative h-[400px] overflow-hidden">
        <Image src={featuredImage} fill alt={name} className="object-cover" />
      </Card>
    </main>
  );
};
