
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Matches() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Matches</h1>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Match History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No matches yet. Create your first match to get started!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}