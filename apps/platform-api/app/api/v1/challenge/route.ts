import slugify from 'slugify';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const slug = searchParams.get('slug');

  let data;
  try {
    if (slug) {
      data = await prisma.challenge.findUnique({
        where: {
          slug,
          isPublished: true,
        },
      });
      return NextResponse.json({ data });
    }

    data = await prisma.challenge.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        difficulty: 'asc',
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  const { title, problem, runnerCode, initialCode, cases } = await req.json();

  try {
    const data = await prisma.challenge.create({
      data: {
        title,
        slug: slugify(title, { lower: true, replacement: '-' }),
        problem,
        runnerCode,
        initialCode,
        cases: JSON.stringify(cases),
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
