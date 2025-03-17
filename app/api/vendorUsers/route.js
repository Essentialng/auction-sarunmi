import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vendors = await prisma.user.findMany({
      where: {
        type: 'vendor',
      },
      include: {
        items: {
          include: {
            model: {
                include: {
                    category : true
                }
            },
          },
        },
      },
    });

    return NextResponse.json(vendors, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch vendors: ${error.message}` },
      { status: 500 }
    );
  }
}
