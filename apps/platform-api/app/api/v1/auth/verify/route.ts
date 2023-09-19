import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();

  try {
    const data = await prisma.user.findFirst({
      where: {
        email,
        code,
      },
    });

    if (data) {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          isVerified: true,
        },
      });

      return NextResponse.json({ data: 'Verified' }, { status: 201 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors });
    }

    if (error.name === 'PrismaClientKnownRequestError') {
      return NextResponse.json({ error: `${error.meta.target[0]} not available` }, { status: error.status });
    }
  }
}
