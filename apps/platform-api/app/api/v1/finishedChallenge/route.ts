import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId')!;
  try {
    const data = await prisma.finishedChallenge.findMany({
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
  const { challengeId, userId, code } = await req.json();

  let data;

  try {
    data = await prisma.finishedChallenge.create({
      data: {
        challengeId,
        userId,
        code,
      },
    });
    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
