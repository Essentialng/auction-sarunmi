import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';
import { getTodayInLocalFormat } from '@/utils/methods';

export async function GET() {
    try {
      const currentTime = getTodayInLocalFormat();

        const itemsData = await prisma.item.findMany({
            where: {
              endTime: {
                gte: currentTime, 
              },
            },
            include: {
                model: true 
              } 
        });
        
        const data = itemsData.map(item => ({
            ...item,
            models: itemsData.model
          }));
        return NextResponse.json({data:data}, {status: 200})
    } catch (error) {
      return NextResponse.json({ success: false, message: `Failed to fetch cars: ${error.message}` }, { status: 500 });
    }
  }
