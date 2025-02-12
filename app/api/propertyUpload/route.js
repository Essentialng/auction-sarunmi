import prisma from "@/lib/global_client"
import { NextResponse } from 'next/server';


export async function POST(request) {
    try {
        const body = await request.json();

        const {
            id,
            images,
            productName,
            description,
            cOfONumber,
            sizeAndLayout,
            proofOfOwnership,
            location,
            status

        } = body;


       
        const existingUser = await prisma.user.findUnique({
             where: { id } 
            });
        
        if (!existingUser) {
            return NextResponse.json({ message: `user not exists` }, { status: 404 });
        }
        
        const userId = id
        const newUser = await prisma.Property.create({
            data: {
                userId,
                image:images,
                productName,
                description,
                cOfONumber,
                sizeAndLayout,
                proofOfOwnership,
                location,
                status

            },
        });
        

        return NextResponse.json({ message: 'User registered successfully', user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
    }
}

