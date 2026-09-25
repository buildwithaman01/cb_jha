import Link from 'next/link';
import { LayoutDashboard, Users, UserCheck, Settings, LogOut, GraduationCap, School } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="font-heading font-bold text-lg text-primary tracking-tight">C.B. JHA ADMIN</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Leads & Inquiries</p>
          </div>
          <Link href="/admin/inquiries?type=general" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors">
            <Users className="w-4 h-4" /> General Inquiries
          </Link>
          <Link href="/admin/inquiries?type=home-tuition" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors">
            <GraduationCap className="w-4 h-4" /> Home Tuition
          </Link>
          <Link href="/admin/inquiries?type=school-staffing" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors">
            <School className="w-4 h-4" /> School Staffing
          </Link>
          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Applications</p>
          </div>
          <Link href="/admin/tutors" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors">
            <UserCheck className="w-4 h-4" /> Tutor Network
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
            <LogOut className="w-4 h-4" /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 md:hidden">
          <span className="font-heading font-bold text-lg text-primary tracking-tight">C.B. JHA ADMIN</span>
        </header>
        <div className="flex-1 overflow-auto p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
