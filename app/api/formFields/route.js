import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';



export async function GET(request) {
    try {

      const { searchParams } = new URL(request.url);
      const categoryId = searchParams.get('categoryId');
  
      if (!categoryId) {
        return NextResponse.json({ success: false, message: 'Category ID is required' }, { status: 400 });
      }
  
      const fields = await prisma.field.findMany({
        where: {
          categoryId: parseInt(categoryId) // Ensure it's the correct type
        }
      });
  
      return NextResponse.json({ fields: fields }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ success: false, message: 'Failed to fetch fields' }, { status: 500 });
    }
  };
  





export async function POST(request) {
  try {
      const body = await request.json();

      const {
        id,
        categoryId, 
        label,
        value,
        placeholder,
        dataType,
        required,
        options,
    } = body;

      const existingUser = await prisma.user.findUnique({
           where: { id } 
          });
      
      if (!existingUser) {
          return NextResponse.json({ message: `user not exists` }, { status: 404 });
      }

      const model = await prisma.Field.create({
          data: {
            categoryId, 
            label,
            value,
            placeholder,
            dataType,
            required,
            options,
          },
      });

      return NextResponse.json({ message: 'Field created successfully', model: model }, { status: 201 });
  } catch (error) {
      return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
  }
};




export async function PUT(request) {
  try {
    const body = await request.json();

    const {
      id,           
      categoryId,
      label,
      value,
      placeholder,
      dataType,
      required,
      options,
    } = body;

    const existingField = await prisma.field.findUnique({
      where: { id },
    });

    if (!existingField) {
      return NextResponse.json({ message: `Field not found` }, { status: 404 });
    }

    const updatedField = await prisma.field.update({
      where: { id },
      data: {
        categoryId: categoryId ?? existingField.categoryId,
        label: label ?? existingField.label,
        value: value ?? existingField.value,
        placeholder: placeholder ?? existingField.placeholder,
        dataType: dataType ?? existingField.dataType,
        required: required ?? existingField.required,
        options: options ?? existingField.options,
      },
    });

    return NextResponse.json(
      { message: 'Field updated successfully', field: updatedField },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}




export async function DELETE(request) {
  try {
    const { id, fieldId } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: { id } 
     });
 
    if (!existingUser) {
        return NextResponse.json({ message: `user not exists` }, { status: 404 });
    }
    await prisma.Field.delete({
      where: { id: fieldId }
    });

    return NextResponse.json({ message: 'Form field deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}
