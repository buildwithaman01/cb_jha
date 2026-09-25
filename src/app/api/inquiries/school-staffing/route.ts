import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const staffingReq = await prisma.schoolStaffingRequest.create({
      data: {
        schoolName: data.schoolName,
        contactPerson: data.contactPerson,
        designation: data.designation || null,
        phone: data.phone,
        email: data.email,
        address: data.address,
        staffingType: data.staffingType,
        subjects: Array.isArray(data.subjects) ? data.subjects.join(', ') : data.subjects,
        level: Array.isArray(data.level) ? data.level.join(', ') : data.level,
        teacherCount: parseInt(data.teacherCount, 10),
        duration: data.duration,
        urgency: data.urgency,
        requirements: data.requirements || null,
      },
    });

    return NextResponse.json({ success: true, data: staffingReq }, { status: 201 });
  } catch (error) {
    console.error("School Staffing Request Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
