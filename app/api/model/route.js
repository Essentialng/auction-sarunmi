import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const modelId = searchParams.get("modelId");

    if (categoryId) {
      const models = await prisma.model.findMany({
        where: { categoryId: Number(categoryId) },
        include: { items: true } 
      });

      return NextResponse.json(models, { status: 200 });

    } else if (modelId) {
      const items = await prisma.item.findMany({
        where: { modelId: Number(modelId) }
      });

      return NextResponse.json(items, { status: 200 });
    } 
    // else {
    //   const allItems = await prisma.item.findMany();

    //   return NextResponse.json(allItems, { status: 200 });
    // }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch data: ${error.message}` },
      { status: 500 }
    );
  }
}




export async function POST(request) {
  try {
      const body = await request.json();

      const {id, categoryId, name} = body;


     
      const existingUser = await prisma.user.findUnique({
           where: { id } 
          });
      
      if (!existingUser) {
          return NextResponse.json({ message: `user not exists` }, { status: 404 });
      }

      const model = await prisma.Model.create({
          data: {
            categoryId,
            name
          },
      });

      return NextResponse.json({ message: 'Model created successfully', model: model }, { status: 201 });
  } catch (error) {
      return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
  }
}


