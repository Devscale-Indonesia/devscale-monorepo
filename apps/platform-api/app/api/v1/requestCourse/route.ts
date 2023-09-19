import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const take = searchParams.get('take');

  try {
    const requestedCourses = await prisma.requestedCourse.findMany({
      include: {
        voteRequestedCourse: true,
        user: true,
      },
      take: Number(take) || 10,
      orderBy: {
        voteRequestedCourse: {
          _count: 'desc',
        },
      },
    });

    return NextResponse.json({ data: requestedCourses });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req: NextRequest) {
  const { title, description, userId } = await req.json();

  try {
    const requestedCourse = await prisma.requestedCourse.create({
      data: {
        title,
        description,
        userId,
        voteRequestedCourse: {
          create: {
            userId,
          },
        },
      },
    });

    return NextResponse.json({ data: requestedCourse });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
