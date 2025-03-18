import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const itemsData = await prisma.item.findMany({
      where: {
        status: "listing", 
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        model: {
          select: {
            categoryId: true,
          },
        },
        watchlist: true,
      },
    });

    return NextResponse.json({ items: itemsData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch items: ${error.message}` },
      { status: 500 }
    );
  }
}
