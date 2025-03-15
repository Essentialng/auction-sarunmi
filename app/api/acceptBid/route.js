import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';

export async function POST(request) {
  try {
    const { bidId, ownerId, bidderId, itemId, soldPrice } = await request.json();

    const bid = await prisma.bid.findUnique({
      where: { id: bidId },
    });

    if (!bid) {
      return NextResponse.json({ message: "Bid not found" }, { status: 404 });
    }

    await prisma.bid.update({
      where: { id: bidId },
      data: { status: "accepted" },
    });

    const itemSold = await prisma.itemSold.create({
      data: {
        bidId,
        itemId,
        ownerId,
        bidderId,
        soldPrice,
      },
    });

    await prisma.item.update({
      where: { id: itemId },
      data: { status: "sold" },
    });

    return NextResponse.json({ message: "Item successfully sold", itemSold }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}
