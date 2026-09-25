export default function InquiriesPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Inquiries</h1>
      <div className="bg-card border border-border rounded-sm p-8 text-center text-muted-foreground">
        <p className="text-lg font-medium mb-2">Database not connected</p>
        <p className="text-sm">Form submissions are delivered directly to your email via FormSubmit. Connect a database to view them here.</p>
      </div>
    </div>
  );
}
