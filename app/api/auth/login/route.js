import bcrypt from 'bcryptjs';
import prisma from '@/lib/global_client';
import { generateToken } from '@/package/jwt';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email_or_number, password } = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email_or_number },
          { phoneNumber: email_or_number },
        ],
      },
    });
    
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const { password: _, ...userWithoutPassword } = user;

    const token = await generateToken(userWithoutPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });
    
    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
  }
}
