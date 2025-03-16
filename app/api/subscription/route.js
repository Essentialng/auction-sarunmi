import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';
import { generateToken } from '@/package/jwt';



export async function POST(request) {
    try {
        const body = await request.json();
        
        const { id, subscriptionType } = body;
        
        const existingUser = await prisma.user.findUnique({
            where: {id }
        });
        
        if (!existingUser) {
            return NextResponse.json({ message: 'User does not exist' }, { status: 404 });
        }
        
        const updatedUser = await prisma.user.update({
            where: {id },
            data: { 
                subscriptionType,
                type: 'vendor'
             }
        });

        const token = await generateToken(updatedUser);

        
        return NextResponse.json({ message: 'Subscribed successful', token }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Failed to update subscription type: ${error.message}` }, { status: 500 });
    }
}



