import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET() {
  try {
    const model = await prisma.model.findMany({ 
      where: {
      categoryId: 1
    } });

    return NextResponse.json({model: model }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch model' }, { status: 500 });
  }
}



export async function POST(request) {
  try {
    const body = await request.json()

    const {
      id,
      modelId,     
      name,
      images,
      description,
      location,
      price,
      startTime,
      endTime,
      details,  

    } = body
    const existingUser = await prisma.user.findUnique({
      where: { id } 
     });
 
    if (!existingUser) {
        return NextResponse.json({ message: `user not exists` }, { status: 404 });
    }

    const newCar = await prisma.Item.create({
      data : {
        userId:id,
        modelId:parseInt(modelId),     
        name,
        images,
        description,
        location,
        price:Number(price),
        startTime,
        endTime,
        details,
        status:"auction", 
      }
    })
    return NextResponse.json({model: newCar }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: `Failed to create car: ${error.message}` }, { status: 500 });
  }
}



