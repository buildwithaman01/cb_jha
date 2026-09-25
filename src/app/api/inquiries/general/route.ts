import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email || null,
        phone: data.phone || null,
        type: data.inquiry || 'general',
        message: data.message,
      },
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error("General Inquiry Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
