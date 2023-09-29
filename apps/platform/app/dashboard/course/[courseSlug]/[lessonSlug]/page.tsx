import React from 'react';

interface PageProps {
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <div>{params.lessonSlug}</div>;
}
