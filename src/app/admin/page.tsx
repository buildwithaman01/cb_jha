export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Dashboard Overview</h1>
      <div className="bg-card border border-border rounded-sm p-8 text-center text-muted-foreground">
        <p className="text-lg font-medium mb-2">Database not connected</p>
        <p className="text-sm">Forms are currently handled via FormSubmit. Connect a database to enable this dashboard.</p>
      </div>
    </div>
  );
}
