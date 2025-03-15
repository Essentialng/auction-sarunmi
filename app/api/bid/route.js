import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = parseInt(searchParams.get('itemId'), 10);
    const userId = searchParams.get("userId");

    if (userId) {
      const bids = await prisma.bid.findMany({
        where: { 
          userId,
          status: {
            not: "accepted", 
          },
         },
        include: { item: true }, 
      
      });

      if (bids.length === 0) {
        return NextResponse.json({ success: false, message: "You are not participating in any bids", status: 404 });
      }
      
      const bidItems = await Promise.all(
        bids.map(async (bid) => {
          const highestBid = await prisma.bid.findFirst({
            where: { itemId: bid.itemId },
            orderBy: { amount: 'desc' },
          });


          return {
            bid,
            highestBid,  
          };
        })
      );

      const filteredBids = bidItems.filter(item => item.bid.amount === item.highestBid.amount);

      const userBids = filteredBids

      return NextResponse.json({ success: true, userBids }, { status: 200 });
    }


    if (itemId) {
      const bids = await prisma.bid.findMany({
        where: { itemId },
        include: { item: true }, 
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

    // Check if the bid already exists
    const existingBid = await prisma.bid.findFirst({
      where: {
        userId,
        itemId,
      },
    });

    let bid;

    if (existingBid) {
      bid = await prisma.bid.update({
        where: { id: existingBid.id },
        data: {
          amount,
          updatedAt: new Date(),
        },
      });
    } else {
      bid = await prisma.bid.create({
        data: {
          userId,
          itemId,
          amount,
        },
      });
    }

    return NextResponse.json(
      { success: true, message: existingBid ? "Bid updated successfully" : "Bid created successfully", bid },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to process bid: ${error.message}` },
      { status: 500 }
    );
  }
}

  

  export async function DELETE(request) {
    try {
      const { id } = await request.json();
  
      const deletedBid = await prisma.bid.delete({
        where: {
          id,
        },
      });
  
      return NextResponse.json({ success: true, message: `Bid deleted successfully.` }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { success: false, message: `Failed to delete bid: ${error.message}` },
        { status: 500 }
      );
    }
  }
  
  