import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function TutorsPage() {
  const tutors = await prisma.tutorApplication.findMany({ orderBy: { createdAt: 'desc' } });
  const teachers = await prisma.teacherApplication.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Educator Applications</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Home Tutors</h2>
          <div className="space-y-4">
            {tutors.length === 0 ? (
              <p className="text-muted-foreground">No applications found.</p>
            ) : (
              tutors.map((item) => (
                <Card key={item.id} className="rounded-sm border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><strong className="text-foreground">Phone:</strong> {item.phone}</p>
                        <p><strong className="text-foreground">Email:</strong> {item.email}</p>
                        <p><strong className="text-foreground">Experience:</strong> {item.experience} years</p>
                      </div>
                      <div>
                        <p><strong className="text-foreground">Subjects:</strong> {item.subjects}</p>
                        <p><strong className="text-foreground">Localities:</strong> {item.localities}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">School Teachers</h2>
          <div className="space-y-4">
            {teachers.length === 0 ? (
              <p className="text-muted-foreground">No applications found.</p>
            ) : (
              teachers.map((item) => (
                <Card key={item.id} className="rounded-sm border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><strong className="text-foreground">Phone:</strong> {item.phone}</p>
                        <p><strong className="text-foreground">Email:</strong> {item.email}</p>
                        <p><strong className="text-foreground">Experience:</strong> {item.experience} years ({item.hasBEd ? 'B.Ed' : 'No B.Ed'})</p>
                      </div>
                      <div>
                        <p><strong className="text-foreground">Subjects:</strong> {item.subjects}</p>
                        <p><strong className="text-foreground">Level:</strong> {item.level}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
