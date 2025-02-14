import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET() {
  try {
    const model = await prisma.model.findMany({ 
      where: {
      categoryId: 2
    } });

    return NextResponse.json({model: model }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch model' }, { status: 500 });
  }
}



