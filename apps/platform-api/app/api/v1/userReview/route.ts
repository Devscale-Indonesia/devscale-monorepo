import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { userId, review, point } = await req.json();
  console.log(userId, review, point);

  try {
    const userReview = await prisma.userReview.create({
      data: {
        userId,
        review,
        point: Number(point),
      },
    });
    console.log(userReview);
    return NextResponse.json({ data: userReview });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
