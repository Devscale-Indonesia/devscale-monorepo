import React from 'react';
import Link from 'next/link';
import { Card } from '@devscale/shared-ui';

interface LessonTemplateProps {
  sections: any[];
  courseSlug: string;
  children?: React.ReactNode;
}

export const LessonTemplate = ({ sections, courseSlug, children }: LessonTemplateProps) => {
  return (
    <main className="w-full flex">
      <div className="w-[calc(100%-420px)]  h-screen overflow-y-auto">{children}</div>
      <div className="w-[420px] space-y-6 h-screen overflow-y-auto bg-zinc-900/40 p-4 border-l-1.5 border-zinc-900">
        {sections.map((item) => {
          return (
            <div key={item.id} className="space-y-2">
              <h5 className="ml-4">{item.name}</h5>
              <div className="space-y-3">
                {item.expand.lesson.map((item: any) => {
                  return (
                    <Link href={`/dashboard/course/${courseSlug}/${item.slug}`} key={item.id} className="block">
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
    </main>
  );
};
