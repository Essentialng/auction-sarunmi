import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";




export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('id');
  
      // Fetch all the watchlist entries for the user
      const watchlist = await prisma.watchlist.findMany({
        where: {
          userId
        },
        select: {
          itemId: true,  // Only retrieve itemId from watchlist
        }
      });
  
      // If no watchlist entries found, return a message
      if (watchlist.length === 0) {
        return NextResponse.json({ success: false, message: 'No items found in the watchlist' }, { status: 404 });
      }
  
      // Extract all itemIds from the watchlist entries
      const itemIds = watchlist.map(entry => entry.itemId);
  
      // Fetch all items that have the same itemIds
      const items = await prisma.item.findMany({
        where: {
          id: {
            in: itemIds  // Retrieve items that match any of the itemIds
          }
        }
      });
  
      // Return the found items
      return NextResponse.json({ items: items, watchlist: watchlist }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ success: false, message: `Failed to fetch items: ${error.message}` }, { status: 500 });
    }
  }
  



export async function POST(request){
    try{
        const body = await request.json()
        const {
            userId,
            itemId 
        }= body

        const existingUser = await prisma.user.findUnique({
            where: { id :userId } 
           });
       
       if (!existingUser) {
           return NextResponse.json({ message: `user not exists` }, { status: 404 });
       }

       const creatWatchList = await prisma.Watchlist.create({
        data: {
            userId,
            itemId
        }
       });

       return NextResponse.json({ message: 'WatchList created successfully'}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
    }
}