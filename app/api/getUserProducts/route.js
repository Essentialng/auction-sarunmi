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

        const products = await prisma.uploadProduct.findMany({
            where: { userId: id },
            // include: { user: true }
        });

        if (products.length === 0) {
            return NextResponse.json({ message: `No products found for user with id ${id}` }, { status: 404 });
        }

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
    }
}
