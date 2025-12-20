
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  Search,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  Gamepad2,
  Wallet
} from "lucide-react";

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with Supabase queries
  const stats = {
    totalUsers: 1247,
    activeMatches: 34,
    totalRevenue: 12450.50,
    pendingWithdrawals: 8,
  };

  const recentUsers = [
    { id: 1, username: "player123", email: "player123@example.com", balance: 150.00, status: "active", joined: "2024-12-15" },
    { id: 2, username: "gamer456", email: "gamer456@example.com", balance: 75.50, status: "active", joined: "2024-12-14" },
    { id: 3, username: "fighter789", email: "fighter789@example.com", balance: 0.00, status: "suspended", joined: "2024-12-13" },
  ];

  const recentMatches = [
    { id: 1, game: "Football", player1: "player123", player2: "gamer456", stake: 50, status: "completed", winner: "player123" },
    { id: 2, game: "Racing", player1: "fighter789", player2: "racer101", stake: 25, status: "active", winner: null },
    { id: 3, game: "Boxing", player1: "boxer202", player2: "champ303", stake: 100, status: "pending", winner: null },
  ];

  const transactions = [
    { id: 1, user: "player123", type: "deposit", method: "MTN", amount: 100, status: "completed", date: "2024-12-20 10:30" },
    { id: 2, user: "gamer456", type: "withdraw", method: "Airtel", amount: 50, status: "pending", date: "2024-12-20 09:15" },
    { id: 3, user: "fighter789", type: "deposit", method: "PayPal", amount: 75, status: "completed", date: "2024-12-19 16:45" },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      active: "default",
      completed: "secondary",
      pending: "outline",
      suspended: "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Activity className="w-10 h-10" />
          Admin Dashboard
        </h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="glass-effect border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Matches</CardTitle>
              <Gamepad2 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeMatches}</div>
              <p className="text-xs text-muted-foreground">Live right now</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">10% platform fee</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Withdrawals</CardTitle>
              <Wallet className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingWithdrawals}</div>
              <p className="text-xs text-muted-foreground">Requires approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Card className="glass-effect">
          <CardContent className="pt-6">
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="matches">Matches</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>

              {/* Users Tab */}
              <TabsContent value="users" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>

                <div className="rounded-md border border-primary/20">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>${user.balance.toFixed(2)}</TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>{user.joined}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {user.status === "active" ? (
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Ban className="h-4 w-4 text-destructive" />
                                </Button>
                              ) : (
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Matches Tab */}
              <TabsContent value="matches" className="space-y-4">
                <div className="rounded-md border border-primary/20">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Game</TableHead>
                        <TableHead>Player 1</TableHead>
                        <TableHead>Player 2</TableHead>
                        <TableHead>Stake</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Winner</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentMatches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell className="font-medium">{match.game}</TableCell>
                          <TableCell>{match.player1}</TableCell>
                          <TableCell>{match.player2}</TableCell>
                          <TableCell>${match.stake}</TableCell>
                          <TableCell>{getStatusBadge(match.status)}</TableCell>
                          <TableCell>{match.winner || "-"}</TableCell>
                          <TableCell className="text-right">
                            <Button size="sm" variant="ghost">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Transactions Tab */}
              <TabsContent value="transactions" className="space-y-4">
                <div className="rounded-md border border-primary/20">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((tx) => (
                        <TableRow key={tx.id}>
                          <TableCell className="font-medium">{tx.user}</TableCell>
                          <TableCell>
                            <Badge variant={tx.type === "deposit" ? "default" : "secondary"}>
                              {tx.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{tx.method}</TableCell>
                          <TableCell>${tx.amount.toFixed(2)}</TableCell>
                          <TableCell>{getStatusBadge(tx.status)}</TableCell>
                          <TableCell>{tx.date}</TableCell>
                          <TableCell className="text-right">
                            {tx.status === "pending" && (
                              <div className="flex justify-end gap-2">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <XCircle className="h-4 w-4 text-destructive" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}