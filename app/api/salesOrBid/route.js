import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    const itemsWithHighestBids = await prisma.item.findMany({
      where: {
        userId,
        status: { not: "sold" },
        // bids: { some: {} },
      },
      include: {
        bids: {
          orderBy: { amount: "desc" },
          take: 1,
          select: {
            id: true,
            amount: true,
            userId: true,
            createdAt: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                profilePicture: true,
                phoneNumber: true,
              },
            },
          },
        },
      },
    });

    const formattedItems = itemsWithHighestBids.map((item) => ({
      ...item,
      highestBid: item.bids.length > 0 ? item.bids[0] : null,
    }));

    return NextResponse.json(
      { success: true, item: formattedItems },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch items: ${error.message}` },
      { status: 500 }
    );
  }
}
