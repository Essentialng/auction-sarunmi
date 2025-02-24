import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';


export async function GET() {
    try {
        const others = await prisma.model.findMany({
            where: {
                categoryId: {
                  notIn: [1, 2],
                }
            },
            include: {
                items: true 
              } 
        });

        const data = others.map(other => ({
            ...other,
            items: other.items.flat()
          }));
        return NextResponse.json({data:data}, {status: 200})
    } catch (error) {
      return NextResponse.json({ success: false, message: `Failed to fetch others: ${error.message}` }, { status: 500 });
    }
  }
