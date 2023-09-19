import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
// import { Resend } from 'resend';
import { customAlphabet } from 'nanoid';
import { prisma } from '@/utils/prisma';
// import { EmailTemplate } from '@/email/template/verification';

// const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { fullname, username, email, password } = await req.json();
  const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
  const code = nanoid();

  try {
    const hashedPassword = await bcrypt.hash(password, 13);
    const createUser = await prisma.user.create({
      data: {
        fullname,
        username,
        email,
        password: hashedPassword,
        code,
      },
    });

    // await resend.emails.send({
    //   from: 'Devscale <hey@devscale.id>',
    //   to: [email],
    //   subject: 'Devscale Verification Code',
    //   react: EmailTemplate({ fullname, email, code }) as React.ReactElement,
    // });

    return NextResponse.json({ data: createUser }, { status: 201 });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors });
    }

    if (error.name === 'PrismaClientKnownRequestError') {
      return NextResponse.json({ error: `${error.meta.target[0]} not available` }, { status: error.status });
    }
  }
}
