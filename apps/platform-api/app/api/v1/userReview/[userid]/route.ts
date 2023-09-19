import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest, { params }: { params: { userid: string } }) {
  const { userid: userId } = params;

  try {
    const data = await prisma.userReview.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
