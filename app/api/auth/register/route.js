import prisma from "@/lib/global_client"
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            state,
            nin,
            type,
        } = body;


       
        const existingUser = await prisma.user.findUnique({
             where: { email } 
            });
        
        const existingPhoneNumber = await prisma.user.findUnique({
            where: { phoneNumber: phoneNumber }
            });

        if (existingUser) {
            return NextResponse.json({ message: `${email} already exists` }, { status: 404 });
        }else if(existingPhoneNumber) {
            return NextResponse.json({ message: `${phoneNumber} already exists` }, { status: 404 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                state,
                email,
                phoneNumber,
                state,
                password: hashedPassword,
                nin,
                type,
            },
        });
        

        return NextResponse.json({ message: 'User registered successfully', user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error: ${error}` }, { status: 500 });
    }
}
