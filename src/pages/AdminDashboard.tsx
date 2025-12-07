
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Platform Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Admin features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}