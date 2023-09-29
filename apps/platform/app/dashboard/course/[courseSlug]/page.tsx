import React from 'react';
import { CourseSingle } from '../../../../components/Dashboard/components/Course/Course.Single';
import { pocketbase } from '../../../../utils/pocketbase';

async function getSingleCourse(courseSlug: string) {
  const response = await pocketbase.collection('courses').getFirstListItem(`slug="${courseSlug}"`, { expand: 'sections,sections.lesson', cache: 'no-store' });
  return response;
}

export default async function Page({ params }: { params: { courseSlug: string } }) {
  const { courseSlug } = params;
  const singleCourse = await getSingleCourse(courseSlug);
  const url = pocketbase.files.getUrl(singleCourse, singleCourse.featuredImage);

  return (
    <CourseSingle
      slug={singleCourse.slug}
      id={singleCourse.id}
      featuredImage={url}
      name={singleCourse.title}
      description={singleCourse.description}
      prerequirements={''}
      level={'level'}
      courseSections={singleCourse.expand?.sections}
    />
  );
}
