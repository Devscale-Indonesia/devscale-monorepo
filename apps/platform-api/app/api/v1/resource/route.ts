import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';
import { prisma } from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resourceSlug = searchParams.get('resourceSlug');

  let data;
  try {
    if (resourceSlug) {
      data = await prisma.resource.findUnique({
        where: {
          slug: resourceSlug,
        },
      });
      return NextResponse.json({ data }, { status: 200 });
    }

    data = await prisma.resource.findMany({
      where: {
        isPublished: true,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}

export async function POST(req: NextRequest) {
  const { name: title, body, categoryId } = await req.json();

  try {
    const createResource = await prisma.resource.create({
      data: {
        title,
        slug: slugify(title, { replacement: '-', lower: true, trim: true }),
        featuredImage: '',
        body,
        categoryId,
      },
    });
    return NextResponse.json({ data: createResource }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
