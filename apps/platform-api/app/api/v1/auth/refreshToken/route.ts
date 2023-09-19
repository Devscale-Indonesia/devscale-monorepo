import { NextRequest, NextResponse } from 'next/server';
import { sign, verify } from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const refreshTokenKey = req.headers.get('Authorization')?.split(' ')[1];

  if (refreshTokenKey) {
    try {
      const userData: any = verify(refreshTokenKey, process.env.REFRESH_TOKEN_SECRET!);
      const record = {
        id: userData.id,
        fullname: userData.fullname,
        email: userData.email,
        username: userData.username,
      };

      const access_token = sign(record, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '5m' });

      return NextResponse.json(access_token, { status: 401 });
    } catch (error) {
      return NextResponse.json('Unauthorized', { status: 401 });
    }
  }

  return NextResponse.json(refreshTokenKey);
}
