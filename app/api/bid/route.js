import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = parseInt(searchParams.get('itemId'), 10);
    const userId = searchParams.get("userId");

    if (userId) {
      const bids = await prisma.bid.findMany({
        where: { userId },
        include: { item: true }, 
      });

      if (bids.length === 0) {
        return NextResponse.json({ success: false, message: "You are not participating in any bids", status: 404 });
      }
      
      const userBids = await Promise.all(
        bids.map(async (bid) => {
          const highestBid = await prisma.bid.findFirst({
            where: { itemId: bid.itemId },
            orderBy: { amount: 'desc' },
          });

          return {
            ...bid,
            highestBid,  // Attach the highest bid to each user bid object
          };
        })
      );

      return NextResponse.json({ success: true, userBids }, { status: 200 });
    }


    if (itemId) {
      const bids = await prisma.bid.findMany({
        where: { itemId },
        include: { item: true }, // This will include item details for each bid
      });

      if (bids.length === 0) {
        return NextResponse.json({ success: false, message: 'No bids found for this item', status: 404 });
      }

      return NextResponse.json({ success: true, bids }, { status: 200 });
    }


  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch bids: ${error.message}` },
      { status: 500 }
    );
  }
}



  

  

export async function POST(request) {
    try {
      const { userId, itemId, amount } = await request.json();
  
      const newBid = await prisma.bid.create({
        data: {
          userId,
          itemId,
          amount,
        },
      });
  
      return NextResponse.json({ success: true, message: `${amount} is successfully added to bid:`, bid: newBid }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { success: false, message: `Failed to create bid: ${error.message}` },
        { status: 500 }
      );
    }
  }
  