
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Wallet() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Wallet</h1>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Your Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Wallet management coming soon...</p>
            <div className="flex gap-4">
              <Button className="gradient-primary">Deposit</Button>
              <Button variant="outline">Withdraw</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}