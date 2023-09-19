import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
import { Batch } from '@prisma/client';
import { prisma } from '@/utils/prisma';
// import { SessionToUser, SessionToMentor } from '@/email/template/ssession';

// const resend = new Resend(process.env.RESEND_API_KEY!);

export async function PATCH(req: NextRequest, { params }: { params: { sessionId: string } }) {
  const { userId, topic } = await req.json();

  try {
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    // Set startOfWeek to the current day
    startOfWeek.setHours(0, 0, 0, 0);

    // Calculate the number of days until the next Sunday
    const daysUntilSunday = 7 - today.getDay();
    endOfWeek.setDate(endOfWeek.getDate() + daysUntilSunday);
    endOfWeek.setHours(23, 59, 59, 999);

    const userDetails = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (userDetails && userDetails.batch !== Batch.BATCH_2) {
      console.log(userDetails);
      return NextResponse.json({ error: 'You are not in the current batch' }, { status: 400 });
    }

    const isBooked = await prisma.sessionSchedule.findFirst({
      where: {
        isBooked: true,
        id: params.sessionId,
      },
    });

    if (isBooked) {
      console.log(isBooked);
      return NextResponse.json({ error: 'Its already booked' }, { status: 400 });
    }

    const bookedSession = await prisma.sessionSchedule.findFirst({
      where: {
        userId,
        isBooked: true,
        date: {
          gte: startOfWeek, // Greater than or equal to start of week
          lte: endOfWeek, // Less than or equal to end of week
        },
      },
    });

    if (bookedSession) {
      return NextResponse.json({ error: 'You already have a session booked for this week' }, { status: 400 });
    }

    const session = await prisma.sessionSchedule.update({
      where: {
        id: params.sessionId,
      },
      data: {
        userId,
        isBooked: true,
        topic,
      },
    });

    // await resend.emails.send({
    //   from: 'Devscale <hey@devscale.id>',
    //   to: [userDetails?.email!],
    //   subject: 'Devscale Session 1:1',
    //   react: SessionToUser({
    //     fullname: userDetails?.fullname!,
    //     date: session.date,
    //     time: session.time,
    //   }) as React.ReactElement,
    // });

    // await resend.emails.send({
    //   from: 'Devscale <hey@devscale.id>',
    //   to: ['me@indrazm.com'],
    //   subject: 'Devscale Session 1:1 Booked',
    //   react: SessionToMentor({
    //     fullname: userDetails?.fullname!,
    //     date: session.date,
    //     time: session.time,
    //   }) as React.ReactElement,
    // });

    return NextResponse.json({ data: session }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error }, { status: error.status });
  }
}
