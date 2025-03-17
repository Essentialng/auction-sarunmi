import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        const { userId, amount, id, status } = body; 
        
        const itemSold = await prisma.itemSold.findUnique({
            where: { id, },
        });

        if (!itemSold) {
            return NextResponse.json({ success: false, message: 'not found.' }, { status: 404 });
        }

        if (itemSold.bidderId != userId) {
            return NextResponse.json({ success: false, message: `Unauthorized: User is not the bidder for this item. ${itemSold.bidderId}` }, { status: 403 });
        }

        const updatedItemSold = await prisma.itemSold.update({
            where: { id },
            data: {
                paymentAmount: amount,
                paymentStatus: status,
                paymentDate: new Date(), 
            },
            include: {
                item: {
                    select: {
                    name: true,
                    userId: true,
                    modelId: true,
                    price: true,
                    endTime: true,
                    images: true,
                    description:true,
                    location:true,
                    details:true,
                    startTime:true,
                    status: true,
                    createdAt: true,
                    updatedAt:true
                    }
                },
                },
        });

        return NextResponse.json({ message: 'Payment updated successfully.', data: updatedItemSold }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ success: false, message: `Failed to update payment:${error.message}` }, { status: 500 });
    }
}
