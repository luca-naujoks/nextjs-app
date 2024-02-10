import { NextRequest, NextResponse } from 'next/server';
import * as dotenv from 'dotenv';
import { serialize } from 'cookie';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const paswd = body.password

  if (paswd == process.env.DEVELOPMENT_PASSWORD) {
    const response = NextResponse.json({ message: 'Authorized' }, {status: 200});
    response.headers.append('Set-Cookie', serialize('auth', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
    }));

    return response;
  } else {
    return NextResponse.json({ message: 'Unauthorized' }, {status: 401})
  }
}
