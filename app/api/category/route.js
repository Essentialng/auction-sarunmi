import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET() {
  try {
    const category = await prisma.category.findMany();

    return NextResponse.json({category: category }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch category' }, { status: 500 });
  }
}



export async function POST(request) {
  try {
      const body = await request.json();

      const {id, name} = body;


     
      const existingUser = await prisma.user.findUnique({
           where: { id } 
          });
      
      if (!existingUser) {
          return NextResponse.json({ message: `user not exists` }, { status: 404 });
      }

      const category = await prisma.Category.create({
          data: {
              name
          },
      });

      return NextResponse.json({ message: 'Category created successfully', category: category }, { status: 201 });
  } catch (error) {
      return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
  }
}


