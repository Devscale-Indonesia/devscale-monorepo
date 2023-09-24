import { NextRequest, NextResponse } from 'next/server';
import { pocketbase } from './utils/pocketbase';

export default async function middleware(request: NextRequest) {
  // pocketbase.authStore.loadFromCookie(request.headers.get('cookie') || '');

  // try {
  //   pocketbase.authStore.isValid && (await pocketbase.collection('users').authRefresh());
  // } catch (error) {
  //   console.log(error);
  //   pocketbase.authStore.clear();
  //   return NextResponse.redirect(new URL('/login', request.url).toString());
  // }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
