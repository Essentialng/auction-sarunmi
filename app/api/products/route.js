import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET(request) {
  try {

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');

    if(categoryId == "all"){
      const itemsData = await prisma.item.findMany({
        include: {
          model: {
            select: {
              categoryId: true
            }
          },
          watchlist: true
        }
      })

      const items = itemsData.map(item => ({
        ...item,
        categoryId: item.model.categoryId
      }));
      
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



export async function DELETE(request) {
  try {
    const body = await request.json();
    const { id } = body;

    // Check if item exists
    const existingItem = await prisma.Item.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingItem) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    // Delete item
    await prisma.Item.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to delete item: ${error.message}` },
      { status: 500 }
    );
  }
}