import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const userId = searchParams.get('userId');

  try {
    if (userId) {
      const sessions = await prisma.sessionSchedule.findMany({
        where: {
          userId,
        },
      });

      return NextResponse.json({ data: sessions }, { status: 200 });
    }

    const sessions = await prisma.sessionSchedule.findMany({
      orderBy: {
        date: 'asc',
      },
      include: {
        user: {
          select: {
            fullname: true,
            username: true,
          },
        },
      },
    });
    return NextResponse.json({ data: sessions }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { date, time } = await req.json();

  try {
    const session = await prisma.sessionSchedule.create({
      data: {
        date: new Date(date),
        time,
      },
    });
    return NextResponse.json({ data: session }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
