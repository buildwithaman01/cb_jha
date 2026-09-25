import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const requestData = await prisma.homeTuitionRequest.create({
      data: {
        parentName: data.parentName,
        studentName: data.studentName,
        phone: data.phone,
        email: data.email || null,
        studentClass: data.studentClass,
        board: data.board,
        subjects: Array.isArray(data.subjects) ? data.subjects.join(', ') : data.subjects,
        tutorGenderPref: data.tutorGenderPref || null,
        timingPref: data.timingPref,
        frequencyPref: data.frequencyPref,
        locality: data.locality,
        address: data.address,
        requirements: data.requirements || null,
      },
    });

    return NextResponse.json({ success: true, data: requestData }, { status: 201 });
  } catch (error) {
    console.error("Home Tuition Request Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
