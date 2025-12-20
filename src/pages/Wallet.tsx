
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet as WalletIcon, ArrowDownToLine, ArrowUpFromLine, Smartphone, Bitcoin, CreditCard, Building2, DollarSign } from "lucide-react";

type PaymentMethod = 'mtn' | 'airtel' | 'crypto' | 'paypal' | 'payoneer' | 'bank';

const paymentMethods = [
  { value: 'mtn', label: 'MTN Mobile Money', icon: Smartphone, color: 'text-yellow-400' },
  { value: 'airtel', label: 'Airtel Money', icon: Smartphone, color: 'text-red-400' },
  { value: 'crypto', label: 'Cryptocurrency', icon: Bitcoin, color: 'text-orange-400' },
  { value: 'paypal', label: 'PayPal', icon: CreditCard, color: 'text-blue-400' },
  { value: 'payoneer', label: 'Payoneer', icon: CreditCard, color: 'text-orange-500' },
  { value: 'bank', label: 'Bank Account', icon: Building2, color: 'text-green-400' },
];

export default function Wallet() {
  const [balance] = useState(0);
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mtn');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const handleDeposit = () => {
    // TODO: Implement deposit logic with Supabase
    console.log('Deposit:', { amount, paymentMethod, phoneNumber, cryptoAddress, email, accountNumber, bankName });
    setDepositOpen(false);
  };

  const handleWithdraw = () => {
    // TODO: Implement withdraw logic with Supabase
    console.log('Withdraw:', { amount, paymentMethod, phoneNumber, cryptoAddress, email, accountNumber, bankName });
    setWithdrawOpen(false);
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'mtn':
      case 'airtel':
        return (
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="256700000000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-background/50"
            />
          </div>
        );
      case 'crypto':
        return (
          <div className="space-y-2">
            <Label htmlFor="crypto">Wallet Address</Label>
            <Input
              id="crypto"
              placeholder="0x..."
              value={cryptoAddress}
              onChange={(e) => setCryptoAddress(e.target.value)}
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">Supports BTC, ETH, USDT</p>
          </div>
        );
      case 'paypal':
      case 'payoneer':
        return (
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50"
            />
          </div>
        );
      case 'bank':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank">Bank Name</Label>
              <Input
                id="bank"
                placeholder="Bank of Uganda"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account">Account Number</Label>
              <Input
                id="account"
                placeholder="1234567890"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="bg-background/50"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <WalletIcon className="w-10 h-10" />
          Wallet
        </h1>

        {/* Balance Card */}
        <Card className="glass-effect mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-5xl font-bold gradient-text mb-2">
                  ${balance.toFixed(2)}
                </p>
                <p className="text-muted-foreground">Available to play or withdraw</p>
              </div>
              <div className="flex gap-3">
                <Dialog open={depositOpen} onOpenChange={setDepositOpen}>
                  <DialogTrigger asChild>
                    <Button className="gradient-primary gap-2">
                      <ArrowDownToLine className="w-4 h-4" />
                      Deposit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-effect border-primary/20">
                    <DialogHeader>
                      <DialogTitle>Deposit Funds</DialogTitle>
                      <DialogDescription>
                        Add money to your wallet using your preferred payment method
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="deposit-amount">Amount (USD)</Label>
                        <Input
                          id="deposit-amount"
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-method">Payment Method</Label>
                        <Select value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {paymentMethods.map((method) => {
                              const Icon = method.icon;
                              return (
                                <SelectItem key={method.value} value={method.value}>
                                  <div className="flex items-center gap-2">
                                    <Icon className={`w-4 h-4 ${method.color}`} />
                                    {method.label}
                                  </div>
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      {renderPaymentFields()}
                    </div>
                    <Button onClick={handleDeposit} className="w-full gradient-primary">
                      Complete Deposit
                    </Button>
                  </DialogContent>
                </Dialog>

                <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2 border-primary/30">
                      <ArrowUpFromLine className="w-4 h-4" />
                      Withdraw
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-effect border-primary/20">
                    <DialogHeader>
                      <DialogTitle>Withdraw Funds</DialogTitle>
                      <DialogDescription>
                        Transfer money from your wallet to your account
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="withdraw-amount">Amount (USD)</Label>
                        <Input
                          id="withdraw-amount"
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-background/50"
                        />
                        <p className="text-xs text-muted-foreground">
                          Available: ${balance.toFixed(2)}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="withdraw-method">Payment Method</Label>
                        <Select value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {paymentMethods.map((method) => {
                              const Icon = method.icon;
                              return (
                                <SelectItem key={method.value} value={method.value}>
                                  <div className="flex items-center gap-2">
                                    <Icon className={`w-4 h-4 ${method.color}`} />
                                    {method.label}
                                  </div>
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      {renderPaymentFields()}
                    </div>
                    <Button onClick={handleWithdraw} className="w-full gradient-primary">
                      Complete Withdrawal
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="deposits">Deposits</TabsTrigger>
                <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="text-center py-12 text-muted-foreground">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No transactions yet</p>
                  <p className="text-sm mt-2">Your transaction history will appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="deposits" className="mt-6">
                <div className="text-center py-12 text-muted-foreground">
                  <ArrowDownToLine className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No deposits yet</p>
                </div>
              </TabsContent>
              <TabsContent value="withdrawals" className="mt-6">
                <div className="text-center py-12 text-muted-foreground">
                  <ArrowUpFromLine className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No withdrawals yet</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}