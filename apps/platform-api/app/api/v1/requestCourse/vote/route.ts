import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { requestedCourseId, userId } = await req.json();

  try {
    const vote = await prisma.voteRequestedCourse.create({
      data: {
        requestedCourseId,
        userId,
      },
    });

    return NextResponse.json({ data: vote });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
