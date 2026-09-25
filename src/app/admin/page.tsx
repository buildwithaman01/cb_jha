import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const generalCount = await prisma.inquiry.count();
  const tuitionCount = await prisma.homeTuitionRequest.count();
  const schoolReqCount = await prisma.schoolStaffingRequest.count();
  const tutorCount = await prisma.tutorApplication.count();

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="rounded-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{generalCount}</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Home Tuition Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{tuitionCount}</div>
          </CardContent>
        </Card>

        <Card className="rounded-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">School Staffing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{schoolReqCount}</div>
          </CardContent>
        </Card>

        <Card className="rounded-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tutor Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{tutorCount}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-card border border-border rounded-sm p-8 text-center text-muted-foreground">
        Select a category from the sidebar to view detailed leads and applications.
      </div>
    </div>
  );
}
