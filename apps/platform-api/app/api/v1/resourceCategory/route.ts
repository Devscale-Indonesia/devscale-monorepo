import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
  let data;
  try {
    data = await prisma.resourcesCategory.findMany();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
