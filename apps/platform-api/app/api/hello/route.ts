import { prisma } from '@devscale/db-utils';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
