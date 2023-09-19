import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lessonSlug = searchParams.get('lessonSlug');

  let data;
  try {
    if (lessonSlug) {
      data = await prisma.lesson.findUnique({
        where: {
          slug: lessonSlug,
        },
      });
      return NextResponse.json({ data }, { status: 200 });
    }

    data = await prisma.lesson.findMany();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { title, videoId, material, sectionId } = await req.json();

  try {
    const createLesson = await prisma.lesson.create({
      data: {
        title,
        slug: slugify(title, { replacement: '-', lower: true, trim: true }),
        videoId,
        material,
        sectionId,
      },
    });
    return NextResponse.json({ data: createLesson }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
