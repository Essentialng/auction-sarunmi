import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const properties = await prisma.property.findMany();

    return NextResponse.json({data: properties }, {status: 200});
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch properties' }, { status: 500 });
  }
}
