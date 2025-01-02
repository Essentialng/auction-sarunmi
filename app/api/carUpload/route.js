import prisma from "@/lib/global_client"
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            id,
            productType,
            productName,
            image,
            description,
            vin,
            color,
            fuel,
            lotNumber,
            location,
            yearsUsed,
            primaryDamage,
            oldMeter,
            sizeAndLayout,
            proofOfOwnership,
            cOfONumber,
            status

        } = body;


       
        const existingUser = await prisma.user.findUnique({
             where: { id } 
            });
        
        if (!existingUser) {
            return NextResponse.json({ message: `user not exists` }, { status: 404 });
        }

        const userId = id
        const newUser = await prisma.uploadProduct.create({
            data: {
                userId,
                productType,
                productName,
                image,
                description,
                lotNumber,
                vin,
                color,
                fuel,
                location,
                yearsUsed,
                primaryDamage,
                oldMeter,
                sizeAndLayout,
                proofOfOwnership,
                cOfONumber,
                status

            },
        });
        

        return NextResponse.json({ message: 'User registered successfully', user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
    }
}
