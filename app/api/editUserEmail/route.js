import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';
import { generateToken } from '@/package/jwt';

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, email} = body;

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updateEmail = await prisma.user.update({
      where: { id },
      data : {email}
    })

    const { password, ...userWithoutPassword } = updateEmail;

    const token = await generateToken(userWithoutPassword);

    return NextResponse.json({ message: "User email updated successfully", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
