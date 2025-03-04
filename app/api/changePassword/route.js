import bcrypt from 'bcryptjs';
import prisma from '@/lib/global_client';
import { generateToken } from '@/package/jwt';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  try {
    const { id, password, confirmPassword } = await request.json();

    const user = await prisma.user.findUnique({
        where: { id }
      });
    
      if (!user) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 404 });
      };

      if (password !== confirmPassword){
        return NextResponse.json({ message: "New passwords do not match" }, { status: 400})
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatePassword = await prisma.user.update({
        where: { id },
        data : {password : hashedPassword}
    })

    const token = await generateToken(updatePassword);

    return NextResponse.json({ message: 'Password updated successfully', token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
