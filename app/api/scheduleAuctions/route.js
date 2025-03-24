import prisma from "@/lib/global_client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Fetch users with their items filtered by status
        const usersWithUploadedItems = await prisma.user.findMany({
            where: {
                type: 'vendor',
                items: {
                    some: {
                        status: 'uploaded',
                    },
                },
            },
            include: {
                items: {
                    where: {
                        status: 'uploaded',
                    },
                    include: {
                        model: true,
                    },
                },
            },
        });

        return NextResponse.json(usersWithUploadedItems, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Failed to fetch items: ${error.message}` },
            { status: 500 }
        );
    }
}



export async function PUT(request) {
    try {
      const { itemId } = await request.json();
  
      const updatedItem = await prisma.item.update({
        where: {
          id: itemId,
        },
        data: {
          status: "listing",
        },
      });
  
      return NextResponse.json(
        { success: true},
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { success: false, message: `Failed to update item: ${error.message}` },
        { status: 500 }
      );
    }
  }