import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';
import { getTodayInLocalFormat } from '@/utils/methods';


export async function GET() {
  try {
    
    const currentTime = getTodayInLocalFormat();
    
    const items = await prisma.Item.findMany({
      where: {
        endTime: {
          gte: currentTime, 
        },
      },
    });

    if (items.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No ongoing auctions at the moment.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: items }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch ongoing auctions' },
      { status: 500 }
    );
  }
}

