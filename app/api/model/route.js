import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET() {
  try {
    const model = await prisma.model.findMany();

    return NextResponse.json({data: model }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch cars' }, { status: 500 });
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


