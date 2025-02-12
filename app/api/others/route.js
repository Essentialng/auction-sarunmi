import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const others = await prisma.other.findMany();

    return NextResponse.json({data: others }, {status: 200});
  } catch (error) {
    console.error('Error fetching others:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch others' }, { status: 500 });
  }
}
