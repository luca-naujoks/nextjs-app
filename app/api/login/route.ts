import { NextRequest, NextResponse } from 'next/server';
import * as dotenv from 'dotenv';
import { PassThrough } from 'stream';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const paswd = body.password

  if (paswd == dotenv.config().parsed?.DEVELOPMENT_PASSWORD) {
    return NextResponse.json({ message: 'Authorized' }, {status: 200})
  } else {
    return NextResponse.json({ message: 'Unauthorized' }, {status: 401})
  }
}