import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cars = await prisma.car.findMany();

    return NextResponse.json({data: cars }, {status: 200});
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch cars' }, { status: 500 });
  }
}
