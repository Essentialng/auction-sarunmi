import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';

export async function GET() {
    try {
        const cars = await prisma.model.findMany({
            where: {
                categoryId: 1,
            },
            include: {
                items: {
                    include: {
                        watchlist: true, 
                    }
                }
            }
        });

        const data = cars.map(car => ({
            ...car,
            items: car.items.map(item => ({
                ...item,
                watchlist: item.watchlist
            }))
        }));

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Failed to fetch cars: ${error.message}` }, { status: 500 });
    }
}

