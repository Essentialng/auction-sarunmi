import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET(request) {
  try {

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');

    if(categoryId == "all"){
      const items = await prisma.item.findMany()
      const category = await prisma.category.findMany();
      return NextResponse.json({items:items, category:category}, {status: 200})
    }

    const model = await prisma.model.findMany({ 
      where: {
      categoryId: Number(categoryId)
    },
    include: {
      items: true 
    } 
  });

  

    return NextResponse.json({model: model }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: `Failed to fetch cars: ${error.message}` }, { status: 500 });
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



