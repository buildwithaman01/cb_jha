import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

type SearchParams = Promise<{ type?: string }>;

export default async function InquiriesPage({ searchParams }: { searchParams: SearchParams }) {
  const { type = 'general' } = await searchParams;

  let data: Record<string, unknown>[] = [];
  let title = 'Inquiries';

  if (type === 'general') {
    data = await prisma.inquiry.findMany({ orderBy: { createdAt: 'desc' } }) as Record<string, unknown>[];
    title = 'General Inquiries';
  } else if (type === 'home-tuition') {
    data = await prisma.homeTuitionRequest.findMany({ orderBy: { createdAt: 'desc' } }) as Record<string, unknown>[];
    title = 'Home Tuition Requests';
  } else if (type === 'school-staffing') {
    data = await prisma.schoolStaffingRequest.findMany({ orderBy: { createdAt: 'desc' } }) as Record<string, unknown>[];
    title = 'School Staffing Requests';
  }

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">{title}</h1>

      <div className="space-y-4">
        {data.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground border border-border rounded-sm">
            <p className="text-lg">No records yet</p>
            <p className="text-sm mt-1">Records will appear here once forms are submitted</p>
          </div>
        ) : (
          data.map((item) => (
            <Card key={String(item.id ?? "")} className="rounded-sm border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary flex justify-between">
                  <span>{String(item.name ?? item.parentName ?? item.schoolName ?? "—")}</span>
                  <span className="text-xs text-muted-foreground font-normal">
                    {new Date(String(item.createdAt ?? "")).toLocaleDateString("en-IN")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p><strong className="text-foreground">Phone:</strong> {String(item.phone ?? "")}</p>
                    {item.email ? <p><strong className="text-foreground">Email:</strong> {String(item.email)}</p> : null}
                    {item.message ? <p><strong className="text-foreground">Message:</strong> {String(item.message)}</p> : null}
                    {item.studentName ? <p><strong className="text-foreground">Student:</strong> {String(item.studentName)}</p> : null}
                    {item.subjects ? <p><strong className="text-foreground">Subjects:</strong> {String(item.subjects)}</p> : null}
                  </div>
                  <div className="space-y-1">
                    {item.locality ? <p><strong className="text-foreground">Locality:</strong> {String(item.locality)}</p> : null}
                    {item.address ? <p><strong className="text-foreground">Address:</strong> {String(item.address)}</p> : null}
                    {item.staffingType ? <p><strong className="text-foreground">Type:</strong> {String(item.staffingType)}</p> : null}
                    {item.urgency ? <p><strong className="text-foreground">Urgency:</strong> {String(item.urgency)}</p> : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
