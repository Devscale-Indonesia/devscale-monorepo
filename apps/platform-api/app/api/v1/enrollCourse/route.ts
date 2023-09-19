import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId')!;

  try {
    const data = await prisma.enrolledCourse.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { courseId, userId } = await req.json();

  let data;

  try {
    data = await prisma.enrolledCourse.create({
      data: {
        courseId,
        userId,
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
