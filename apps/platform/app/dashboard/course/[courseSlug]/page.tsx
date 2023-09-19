import React from 'react';
import { CourseSingle } from '../../../../components/Dashboard/components/Course/Course.Single';

async function getSingleCourse(courseSlug: string) {
  const response = await fetch(`http://localhost:4201/api/v1/course?courseSlug=${courseSlug}`);
  const data = await response.json();
  return data;
}

export default async function Page({ params }: { params: { courseSlug: string } }) {
  const { courseSlug } = params;
  const { data: course } = await getSingleCourse(courseSlug);
  const { id, name, description, featuredImage, prerequirements, level, courseSections } = course;

  return (
    <CourseSingle
      id={id}
      featuredImage={featuredImage}
      name={name}
      description={description}
      prerequirements={prerequirements}
      level={level}
      courseSections={courseSections}
    />
  );
}
