import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';
import { generateToken } from '@/package/jwt';

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, firstName, lastName, phoneNumber, address, profilePicture } = body;

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updateData = {};
    if (firstName !== undefined) updateData.firstName = firstName;
    if (lastName !== undefined) updateData.lastName = lastName;
    if (phoneNumber !== undefined) updateData.phoneNumber = phoneNumber;
    if (address !== undefined) updateData.address = address;
    if (profilePicture !== undefined) updateData.profilePicture = profilePicture;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ message: "No fields provided for update" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    const token = await generateToken(updatedUser);

    return NextResponse.json({ message: "User updated successfully", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
