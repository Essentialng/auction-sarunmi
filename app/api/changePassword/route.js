import bcrypt from 'bcryptjs';
import prisma from '@/lib/global_client';
import { generateToken } from '@/package/jwt';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { id, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: {
         AND: [
            { email },
            { id }
            ]
      },
    });
    
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credential' }, { status: 401 });
    }

    const updatePassword = await prisma.user.update({
        where: { id },
        data : {password : hashedPassword}
    })

    const token = await generateToken(updatePassword);

    return NextResponse.json({ message: 'Password updated successfully', token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}
