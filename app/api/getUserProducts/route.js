import prisma from "@/lib/global_client"
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { id: id }
        });

        if (!existingUser) {
            return NextResponse.json({ message: `User with id ${id} not found` }, { status: 404 });
        }

        const cars = await prisma.car.findMany({
            where: { userId: id },  
            orderBy: {
                createdAt: 'desc',  
            },
        });

        const properties = await prisma.property.findMany({
            where: { userId: id }, 
            orderBy: {
                createdAt: 'desc',
            },
        });

        const others = await prisma.other.findMany({
            where: { userId: id },  
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Combine the results from all three tables and add a `type` field to differentiate between the models
        const allItems = [
            ...cars.map(item => ({ ...item, type: 'car' })),
            ...properties.map(item => ({ ...item, type: 'property' })),
            ...others.map(item => ({ ...item, type: 'other' })),
        ];

        // Sort the combined array by `createdAt` in descending order to get the latest items
        allItems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Return an empty response if no items are found
        if (allItems.length === 0) {
            return NextResponse.json({ message: `No products found for user with id ${id}` }, { status: 404 });
        }

        // Return the sorted list of items
        return NextResponse.json({ allItems }, { status: 200 });
    } catch (error) {
        // Handle errors and return a 500 response
        return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
    }
}
