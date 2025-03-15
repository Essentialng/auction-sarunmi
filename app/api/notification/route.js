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

    // Fetch product sold notifications
    const productSoldNotifications = await prisma.notification.findMany({
      where: { userId, type: "product sold" },
      include: { item: true },
    });

    // Fetch bid won notifications
    const bidWonNotifications = await prisma.notification.findMany({
      where: { userId, type: "bid won" },
      include: { item: true },
    });

    // Fetch all bids placed by the user
    const userBids = await prisma.bid.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
      select: { itemId: true, createdAt: true },
    });

    // Create a map of { itemId: bidCreatedAt } for multiple bids
    const bidDateMap = {};
    userBids.forEach(({ itemId, createdAt }) => {
      if (!bidDateMap[itemId] || bidDateMap[itemId] > createdAt) {
        bidDateMap[itemId] = createdAt; // Store the earliest bid date for each item
      }
    });

    // Fetch competing bid notifications that match bid items
    const competeNotifications = await prisma.notification.findMany({
      where: {
        NOT: { userId },
        type: "bid",
        itemId: { in: Object.keys(bidDateMap) }, // Fetch notifications for items the user has bid on
      },
      include: { item: true },
    });

    // Filter out notifications where createdAt is before the user's bid on that item
    const validCompeteNotifications = competeNotifications.filter(
      (notification) =>
        bidDateMap[notification.itemId] &&
        new Date(notification.createdAt) >= new Date(bidDateMap[notification.itemId])
    );

    // Merge all notifications
    const allNotifications = [
      ...productSoldNotifications,
      ...bidWonNotifications,
      ...validCompeteNotifications,
    ];

    // Sort by latest notification
    allNotifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json(
      {
        success: true,
        message: "User notifications retrieved successfully",
        notifications: allNotifications,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}





export async function POST(request) {
  try {
    const { userId, message, type, itemId } = await request.json();
    
    const newNotification = await prisma.notification.create({
      data: {
        message,
        userId,
        itemId,
        type
      }
    });
    
    return NextResponse.json({ message: 'Notification created successfully', notification: newNotification }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { notificationId } = await request.json();

    const updatedNotification = await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true }
    });

    return NextResponse.json({ message: 'Notification status updated successfully', notification: updatedNotification }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}




export async function DELETE(request) {
  try {
    const { notificationId } = await request.json();

    await prisma.notification.delete({
      where: { id: notificationId }
    });

    return NextResponse.json({ message: 'Notification deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}
