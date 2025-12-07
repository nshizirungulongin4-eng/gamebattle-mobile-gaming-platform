
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Dashboard content coming soon...</p>
            <Button className="gradient-primary">View Matches</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}