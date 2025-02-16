import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const itemId = parseInt(searchParams.get('itemId'), 10);
  
      if (!itemId) {
        return NextResponse.json({ success: false, message: 'ItemId is required' }, { status: 400 });
      }
  
      const bids = await prisma.bid.findMany({
        where: {
          itemId: itemId,
        }
        // include: {
        //   user: true,  // Include user details (optional)
        //   item: true,  // Include item details (optional)
        // },
      });
  
      if (bids.length === 0) {
        return NextResponse.json({ success: false, message: 'No bids found for this item' }, { status: 404 });
      }
  
      return NextResponse.json({ success: true, bids }, { status: 200 });
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
  