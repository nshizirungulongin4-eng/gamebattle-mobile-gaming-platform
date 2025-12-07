
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CreateMatch() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create Match</h1>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Create New Match</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Match creation coming soon...</p>
            <Button className="gradient-primary">Create Match</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}