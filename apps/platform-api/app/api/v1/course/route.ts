import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseSlug = searchParams.get('courseSlug');
  const isPublished = searchParams.get('isPublished');

  let data;
  try {
    if (courseSlug) {
      data = await prisma.course.findFirst({
        include: {
          courseSection: {
            include: {
              lesson: true,
            },
          },
        },
        where: {
          slug: courseSlug,
        },
      });
      return NextResponse.json({ data }, { status: 201 });
    }

    if (isPublished) {
      data = await prisma.course.findMany({
        include: {
          courseSection: {
            include: {
              lesson: true,
            },
          },
        },
        where: {
          isPublished: true,
        },
      });
      return NextResponse.json({ data }, { status: 201 });
    }

    data = await prisma.course.findMany({
      include: {
        courseSection: {
          include: {
            lesson: true,
          },
        },
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { name, description, prerequirements } = await req.json();

  let data;

  try {
    data = await prisma.course.create({
      data: {
        name,
        slug: slugify(name, { replacement: '-', lower: true, trim: true }),
        description,
        prerequirements,
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
