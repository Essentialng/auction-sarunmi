import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';


export async function POST(request) {
  try {
    const { userId } = await request.json();

    const itemSold = await prisma.itemSold.findMany({
      where: { ownerId: userId },
      include: {
        item: {
          select: {
            name: true,
            price: true,
            endTime: true,
          },
        },
      },
    });

    const itemWon = await prisma.itemSold.findMany({
      where: { bidderId: userId },
      include: {
        item: {
          select: {
            name: true,
            price: true,
            endTime: true,
          },
        },
      },
    });

    const userBids = await prisma.bid.findMany({
      where: { userId },
      include: {
        item: {
          select: {
            name: true,
            price: true,
            endTime: true,
          },
        },
      },
    });

    const itemLoss = [];
    const soldItemsMap = new Map();

    itemSold.forEach((sold) => soldItemsMap.set(sold.itemId, sold));

    for (const bid of userBids) {
      const soldItem = soldItemsMap.get(bid.itemId);
      if (soldItem && soldItem.bidderId !== userId) {
        itemLoss.push(soldItem);
      }
    }

    return NextResponse.json([ itemWon, itemLoss, itemSold ], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}




// export async function DELETE(request) {
//   try {
//     const { id } = await request.json();


//     const item = await prisma.itemSold.findFirst({
//       where: { id },
//     });

//     if (!item) {
//       return NextResponse.json(
//         { success: false, message: "Item not found or not owned by user" },
//         { status: 404 }
//       );
//     }

//     // Delete the item
//     await prisma.itemSold.delete({
//       where: { id: item.id },
//     });

//     return NextResponse.json(
//       { success: true, message: "Item deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: `Internal server error: ${error.message}` },
//       { status: 500 }
//     );
//   }
// }










// export async function POST(request) {
//   try {
//     const { userId } = await request.json();
//     const currentDate = new Date().toISOString(); 

//     const userBids = await prisma.bid.findMany({
//       where: {
//         userId,
//         item: {
//           endTime: {
//             lte: currentDate,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: 'desc',
//       },
//       include: {
//         item: {
//           select: {
//             name : true,
//             updatedAt : true,
//             price: true

//           }
//         }, 
//         itemSold: true, 
//       },
//     });

//     const uniqueBids = [];
//     const seenItemIds = new Set();

//     for (const bid of userBids) {
//       if (!seenItemIds.has(bid.itemId)) {
//         uniqueBids.push(bid);
//         seenItemIds.add(bid.itemId);
//       }
//     }

//     return NextResponse.json({ bids: uniqueBids }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
//   }
// }
