import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';


export async function GET() {
    try {
        const properties = await prisma.model.findMany({
            where: {
                categoryId: 2,
            },
            include: {
                items: true 
              } 
        });

        const data = properties.map(property => ({
            ...property,
            items: property.items.flat()
          }));
        return NextResponse.json({data:data}, {status: 200})
    } catch (error) {
      return NextResponse.json({ success: false, message: `Failed to fetch properties: ${error.message}` }, { status: 500 });
    }
  }
