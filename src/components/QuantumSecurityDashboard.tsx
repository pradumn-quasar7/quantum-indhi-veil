import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Cpu, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Zap,
  Network,
  Bitcoin,
  CreditCard,
  Lock,
  Eye,
  RefreshCw
} from 'lucide-react';
import quantumHero from '@/assets/quantum-hero.jpg';
import securityDashboard from '@/assets/security-dashboard.jpg';
import blockchainNetwork from '@/assets/blockchain-network.jpg';

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  status: 'safe' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface IoTDevice {
  id: string;
  name: string;
  type: string;
  status: 'online' | 'offline' | 'compromised' | 'warning';
  lastSeen: string;
  quantumProtected: boolean;
}

const QuantumSecurityDashboard: React.FC = () => {
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetric[]>([
    { id: '1', name: 'Quantum Encryption', value: 98, status: 'safe', trend: 'stable' },
    { id: '2', name: 'IoT Device Security', value: 85, status: 'warning', trend: 'up' },
    { id: '3', name: 'UPI Transaction Safety', value: 95, status: 'safe', trend: 'up' },
    { id: '4', name: 'Blockchain Integrity', value: 100, status: 'safe', trend: 'stable' },
    { id: '5', name: 'AI Threat Detection', value: 92, status: 'safe', trend: 'up' },
    { id: '6', name: 'Post-Quantum Crypto', value: 99, status: 'safe', trend: 'stable' }
  ]);

  const [iotDevices, setIoTDevices] = useState<IoTDevice[]>([
    { id: '1', name: 'Smart Grid Controller', type: 'Infrastructure', status: 'online', lastSeen: '2 mins ago', quantumProtected: true },
    { id: '2', name: 'Traffic Management Hub', type: 'Transportation', status: 'online', lastSeen: '1 min ago', quantumProtected: true },
    { id: '3', name: 'Banking ATM Network', type: 'Financial', status: 'online', lastSeen: '30 secs ago', quantumProtected: true },
    { id: '4', name: 'Hospital IoT Sensors', type: 'Healthcare', status: 'warning', lastSeen: '5 mins ago', quantumProtected: false },
    { id: '5', name: 'Water Treatment Plant', type: 'Utilities', status: 'online', lastSeen: '1 min ago', quantumProtected: true }
  ]);

  const [threatLevel, setThreatLevel] = useState(2);
  const [bitcoinPrice, setBitcoinPrice] = useState(67234.89);
  const [upiTransactions, setUpiTransactions] = useState(1247);
  const [quantumReadiness, setQuantumReadiness] = useState(94);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with slight variations
      setSecurityMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, Math.min(100, metric.value + (Math.random() - 0.5) * 2))
      })));

      // Update Bitcoin price
      setBitcoinPrice(prev => prev + (Math.random() - 0.5) * 100);
      
      // Update UPI transactions
      setUpiTransactions(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'critical': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDeviceStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'offline': return 'bg-muted text-muted-foreground';
      case 'compromised': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={quantumHero} 
          alt="Quantum Security Framework" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-quantum bg-clip-text text-transparent animate-quantum-pulse">
              Quantum IoT Security Framework
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Next-generation quantum-resistant security for critical infrastructure with integrated UPI & blockchain protection
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="default" className="quantum-glow">
                <Shield className="mr-2 h-4 w-4" />
                Activate Quantum Shield
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Eye className="mr-2 h-4 w-4" />
                Monitor Network
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Real-time Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Threat Level</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">Level {threatLevel}</div>
              <p className="text-xs text-muted-foreground">
                Low Risk - All systems secure
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bitcoin Integration</CardTitle>
              <Bitcoin className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">₹{bitcoinPrice.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Quantum-secured transactions
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">UPI Transactions</CardTitle>
              <CreditCard className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{upiTransactions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Processed this hour
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quantum Readiness</CardTitle>
              <Cpu className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{quantumReadiness}%</div>
              <p className="text-xs text-muted-foreground">
                Post-quantum crypto deployed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Security Metrics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security Metrics
              </CardTitle>
              <CardDescription>
                Real-time quantum security status across all systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityMetrics.map((metric) => (
                <div key={metric.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <Badge className={getStatusColor(metric.status)}>
                      {metric.value}%
                    </Badge>
                  </div>
                  <Progress 
                    value={metric.value} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <img src={securityDashboard} alt="Security Dashboard" className="h-5 w-5 rounded" />
                AI Threat Detection
              </CardTitle>
              <CardDescription>
                Machine learning powered vulnerability scanning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Active Scans</span>
                  <Badge className="bg-accent text-accent-foreground animate-pulse">
                    Running
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Vulnerabilities Found</span>
                  <span className="font-bold text-warning">3 Low Risk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quantum Algorithms</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Last Scan</span>
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* IoT Device Monitoring */}
        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-secondary" />
              Critical Infrastructure IoT Devices
            </CardTitle>
            <CardDescription>
              Real-time monitoring of quantum-protected IoT endpoints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {iotDevices.map((device) => (
                <Card key={device.id} className="border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{device.name}</h4>
                      <Badge className={getDeviceStatusColor(device.status)}>
                        {device.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{device.type}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span>Last seen: {device.lastSeen}</span>
                      {device.quantumProtected ? (
                        <Lock className="h-3 w-3 text-success" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 text-warning" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain & Payment Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <img src={blockchainNetwork} alt="Blockchain Network" className="h-5 w-5 rounded" />
                Indian Blockchain Integration
              </CardTitle>
              <CardDescription>
                Quantum-secured blockchain transactions and smart contracts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Active Nodes</span>
                <span className="font-bold text-accent">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quantum Hash Rate</span>
                <span className="font-bold">156.3 QH/s</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Smart Contracts</span>
                <span className="font-bold text-primary">1,203 Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Security Level</span>
                <Badge className="bg-success text-success-foreground">
                  Quantum-Safe
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                UPI Security Infrastructure
              </CardTitle>
              <CardDescription>
                Post-quantum cryptography for digital payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Transaction Volume</span>
                <span className="font-bold text-secondary">₹45.2M</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Success Rate</span>
                <span className="font-bold text-success">99.97%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Fraud Detected</span>
                <span className="font-bold text-warning">0.003%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quantum Encryption</span>
                <CheckCircle className="h-4 w-4 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Control Panel */}
        <Card className="border-primary/20 bg-gradient-quantum/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quantum Security Control Panel
            </CardTitle>
            <CardDescription>
              Advanced controls for quantum-resistant security framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-2 border-primary/50 hover:bg-primary hover:text-primary-foreground">
                <RefreshCw className="h-4 w-4" />
                <span className="text-xs">Refresh Quantum Keys</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2 border-accent/50 hover:bg-accent hover:text-accent-foreground">
                <Activity className="h-4 w-4" />
                <span className="text-xs">Run Deep Scan</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2 border-secondary/50 hover:bg-secondary hover:text-secondary-foreground">
                <Network className="h-4 w-4" />
                <span className="text-xs">Update Topology</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2 border-warning/50 hover:bg-warning hover:text-warning-foreground">
                <Lock className="h-4 w-4" />
                <span className="text-xs">Emergency Lock</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuantumSecurityDashboard;