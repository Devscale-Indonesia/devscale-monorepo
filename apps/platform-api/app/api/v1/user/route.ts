import { NextResponse } from 'next/server';
import { prisma } from '../../../../utils/prisma';

export async function GET() {
  try {
    const data = await prisma.user.findMany({
      where: {
        batch: {
          equals: 'BATCH_2',
        },
      },
      select: {
        id: true,
        fullname: true,
        username: true,
        email: true,
        avatar: true,
        userReview: true,
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
