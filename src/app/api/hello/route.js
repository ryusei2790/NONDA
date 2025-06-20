import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: [] });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}