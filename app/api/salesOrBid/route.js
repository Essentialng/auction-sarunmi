import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    const itemsWithBids = await prisma.item.findMany({
      where: {
        userId,
        bids: { some: {} },
      },
      include: { bids: true }, 
    });

    if (itemsWithBids.length === 0) {
      return NextResponse.json({ success: false, message: "No items with bids found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, item: itemsWithBids }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch items: ${error.message}` },
      { status: 500 }
    );
  }
}
