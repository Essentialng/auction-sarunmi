import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const usersWithListingItems = await prisma.user.findMany({
      where: {
          type: 'vendor',
          items: {
              some: {
                  status: 'listing',
              },
          },
      },
      include: {
          items: {
              where: {
                  status: 'listing',
              },
              include: {
                  model: true,
              },
          },
      },
  });

    return NextResponse.json(usersWithListingItems, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch vendors: ${error.message}` },
      { status: 500 }
    );
  }
};


export async function POST(request) {
  try {
    const body = await request.json();
    const { id, report, startTime, endTime } = body;

    const item = await prisma.item.update({
      where: {
       id,
      },
      data: { 
        startTime: startTime,
        endTime: endTime,
        report: report,
        status: "auction"
      },
    });

    return NextResponse.json(
      { success: true, message: "Report submitted successfully", data: item },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to post report: ${error.message}` },
      { status: 500 }
    );
  }
}



