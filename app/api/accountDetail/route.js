import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, username, phonenumber } = body;

    if (!id || !username || !phonenumber) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username, phonenumber },
    });

    return NextResponse.json({ message: "User updated successfully", user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
