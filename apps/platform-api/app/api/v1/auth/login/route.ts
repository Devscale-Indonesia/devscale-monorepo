import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (findUser) {
      if (!findUser.isVerified) return NextResponse.json({ error: 'Your account is not verified' });

      const isPasswordMatches = await bcrypt.compare(password, findUser.password!);

      if (isPasswordMatches) {
        const record = {
          id: findUser.id,
          fullname: findUser.fullname,
          email: findUser.email,
          username: findUser.username,
          bio: findUser.bio,
        };

        const access_token = sign(record, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '5m' });
        const refresh_token = sign(record, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '30d' });

        const res = NextResponse.json({ data: record }, { status: 200 });
        res.cookies.set('access_token', access_token);
        res.cookies.set('refresh_token', refresh_token, { httpOnly: true });

        return res;
      }

      return NextResponse.json({ error: 'Password does not matches' }, { status: 404 });
    }

    return NextResponse.json({ data: findUser }, { status: 404 });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 501 });
    }
    if (error.name === 'PrismaClientKnownRequestError') {
      return NextResponse.json({ error: `${error.meta.target[0]} not available` }, { status: error.status });
    }
  }
}

export async function OPTIONS() {
  return NextResponse.next();
}
