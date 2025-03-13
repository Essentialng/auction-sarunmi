import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const userBids = await prisma.bid.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    if (userBids.length === 0) {
      return NextResponse.json({ message: 'No bids found for the user', notifications: [] }, { status: 200 });
    }

    const initialBidDate = userBids[0].createdAt;

    const notificationItems = await prisma.notification.findMany({
      where: {
        NOT: { userId: userId },
        createdAt: {
          gte: initialBidDate,
        },
      },
      include: {
        item: true,
      },
    });

    const filteredNotifications = notificationItems.filter(
      (notification) => notification.item?.userId !== userId && notification.type === "bid"
    );

    return NextResponse.json({ message: 'Notifications retrieved successfully', notifications: filteredNotifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
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
