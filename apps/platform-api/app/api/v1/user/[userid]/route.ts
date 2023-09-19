import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest, { params }: { params: { userid: string } }) {
  const { userid } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userid,
      },
      select: {
        id: true,
        fullname: true,
        username: true,
        email: true,
        avatar: true,
        bio: true,
        point: true,
        userReview: true,
        dailyStandup: true,
      },
    });

    return NextResponse.json({ data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { userid: string } }) {
  const { userid } = params;
  const { fullname, bio, avatar } = await req.json();

  try {
    const user = await prisma.user.update({
      where: {
        id: userid,
      },
      data: {
        fullname,
        bio,
        avatar,
      },
    });

    const record = {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      username: user.username,
      bio: user.bio,
    };

    return NextResponse.json({ data: record });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
