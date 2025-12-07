
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Trophy, Zap, Shield, Wallet, Users, TrendingUp } from "lucide-react";

const games = [
  {
    id: "football",
    name: "Football",
    icon: "⚽",
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
  },
  {
    id: "racing",
    name: "Racing",
    icon: "🏎️",
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop"
  },
  {
    id: "fighting",
    name: "Fighting",
    icon: "🥊",
    color: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop"
  },
  {
    id: "boxing",
    name: "Boxing",
    icon: "🥊",
    color: "from-yellow-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop"
  }
];

const features = [
  {
    icon: Trophy,
    title: "Compete & Win",
    description: "Challenge friends and win real money"
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Winners receive prizes automatically"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Safe and fair gaming environment"
  },
  {
    icon: Wallet,
    title: "Easy Deposits",
    description: "MTN & Airtel mobile money support"
  }
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GameBattle
            </h1>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button className="gradient-primary" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
          <Zap className="h-3 w-3 mr-1" />
          Play. Compete. Win Real Money
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Battle Your Friends
          <br />
          Win Big Prizes
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose your game, set your stakes, and compete against friends. Winner takes all with instant payouts to your mobile money.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="gradient-primary text-lg px-8" onClick={() => navigate("/signup")}>
            Start Playing Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => navigate("/login")}>
            Login to Account
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
          <div className="glass-effect rounded-xl p-6">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">Active Players</div>
          </div>
          <div className="glass-effect rounded-xl p-6">
            <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">50K+</div>
            <div className="text-sm text-muted-foreground">Matches Played</div>
          </div>
          <div className="glass-effect rounded-xl p-6">
            <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">$100K+</div>
            <div className="text-sm text-muted-foreground">Prizes Won</div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Choose Your Game</h3>
          <p className="text-muted-foreground text-lg">Select from our exciting collection of competitive games</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="game-card-hover glass-effect overflow-hidden cursor-pointer group">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${game.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-6xl">{game.icon}</div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-2">{game.name}</h4>
                <p className="text-muted-foreground mb-4">Challenge friends and compete</p>
                <Button className={`w-full bg-gradient-to-r ${game.color}`}>
                  Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Why GameBattle?</h3>
          <p className="text-muted-foreground text-lg">The ultimate platform for competitive gaming</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect text-center p-6 hover:border-primary/50 transition-colors">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="glass-effect p-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Ready to Start Winning?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players competing for real prizes. Sign up now and get your first match bonus!
          </p>
          <Button size="lg" className="gradient-primary text-lg px-12" onClick={() => navigate("/signup")}>
            Create Free Account
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="glass-effect border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-bold">GameBattle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 GameBattle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}