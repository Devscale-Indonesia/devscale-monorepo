import { NextRequest, NextResponse } from 'next/server';
import { role } from '@prisma/client';
import { prisma } from '@/utils/prisma';

export async function GET() {
  try {
    const data = await prisma.userPoint.findMany({
      take: 10,
      include: {
        user: true,
      },
      orderBy: {
        point: 'desc',
      },
      where: {
        point: {
          not: 0,
        },
        user: {
          role: {
            not: role.ADMIN,
          },
        },
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { userId, point } = await req.json();

  try {
    const data = await prisma.userPoint.create({
      data: {
        point: Number(point),
        userId,
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function PATCH(req: NextRequest) {
  const { userId, point } = await req.json();

  try {
    const data = await prisma.userPoint.update({
      where: {
        userId,
      },
      data: {
        point: {
          increment: Number(point),
        },
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
