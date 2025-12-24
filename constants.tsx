
import { 
  Home, 
  Search, 
  Activity, 
  Settings,
  Handshake,
  Coins,
  TrendingUp,
  BarChart3,
  ShieldAlert
} from 'lucide-react';
import { NavItem, UserProfile, MatchActivity, StatCardData, Opportunity, ChatMessage } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
  { id: 'feed', label: 'Opportunity Feed', icon: Search, path: '/feed' },
  { id: 'war-room', label: 'War Room', icon: ShieldAlert, path: '/war-room' },
  { id: 'pipes', label: 'Active Pipes', icon: Activity, path: '/pipes' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

export const MOCK_USER: UserProfile = {
  name: 'Alexander Sterling',
  email: 'a.sterling@nichedrop.io',
  avatarUrl: 'https://picsum.photos/seed/sterling/100/100',
  role: 'Strategy Director'
};

export const RETAILER_STATS: StatCardData[] = [
  { label: 'Active Negotiations', value: 14, icon: Handshake, trend: '+3', trendUp: true },
  { label: 'Deal Tokens', value: 450, icon: Coins, trend: '-12', trendUp: false },
  { label: 'Potential Profit', value: '$124,500', icon: TrendingUp, trend: '+14%', trendUp: true },
  { label: 'Sourcing Efficiency', value: '92%', icon: BarChart3 },
];

export const SUPPLIER_STATS: StatCardData[] = [
  { label: 'Active Negotiations', value: 28, icon: Handshake, trend: '+8', trendUp: true },
  { label: 'Deal Tokens', value: 1200, icon: Coins, trend: '+200', trendUp: true },
  { label: 'Projected Revenue', value: '$482,900', icon: TrendingUp, trend: '+22%', trendUp: true },
  { label: 'Inventory Turnover', value: '4.2x', icon: BarChart3 },
];

export const RETAILER_MATCHES: MatchActivity[] = [
  { id: '1', partner: 'Global Lux Ltd', niche: 'Premium Electronics', matchScore: 98, status: 'active', timestamp: '2h ago', value: '$12,000' },
  { id: '2', partner: 'EcoWare Solutions', niche: 'Sustainable Living', matchScore: 94, status: 'pending', timestamp: '5h ago', value: '$4,500' },
  { id: '3', partner: 'TrendSetters Inc', niche: 'Fashion Accessories', matchScore: 89, status: 'completed', timestamp: '1d ago', value: '$8,200' },
  { id: '4', partner: 'Nordic Wood', niche: 'Minimalist Furniture', matchScore: 85, status: 'active', timestamp: '2d ago', value: '$25,000' },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'o1',
    title: 'Handmade Ceramic Mugs',
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=400',
    matchScore: 98,
    margin: '40%',
    shipping: 'USA',
    hypeReason: 'High Demand Peak'
  },
  {
    id: 'o2',
    title: 'Weighted Bamboo Blankets',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400',
    matchScore: 95,
    margin: '35%',
    shipping: 'Asia Pacific',
    hypeReason: 'Emerging Trend'
  },
  {
    id: 'o3',
    title: 'Modular Desk Organizers',
    imageUrl: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=400',
    matchScore: 92,
    margin: '52%',
    shipping: 'Global',
    hypeReason: 'Low Competition'
  },
  {
    id: 'o4',
    title: 'Recycled Ocean Plastic Watches',
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400',
    matchScore: 89,
    margin: '45%',
    shipping: 'Europe',
    hypeReason: 'Eco-conscious Surge'
  }
];

export const MOCK_CHAT_HISTORY: ChatMessage[] = [
  {
    id: 'c1',
    sender: 'user-ai',
    text: "Initial inquiry initiated. Seeking 500 units of 'Handmade Ceramic Mugs' for Q3 distribution. Target unit price: $14.50.",
    timestamp: '14:20:01',
    type: 'info'
  },
  {
    id: 'c2',
    sender: 'supplier-ai',
    text: "Acknowledgement. Current warehouse availability is verified. Wholesale baseline for 500 units is $18.25 due to artisan labor constraints.",
    timestamp: '14:20:05',
    type: 'offer'
  },
  {
    id: 'c3',
    sender: 'user-ai',
    text: "Counter-parameter applied. Based on historical data for this niche, $18.25 exceeds market ceiling. Proposing $15.75 with guaranteed logistics exclusivity for 12 months.",
    timestamp: '14:21:12',
    type: 'counter'
  },
  {
    id: 'c4',
    sender: 'supplier-ai',
    text: "Evaluating logistics tradeoff... The 12-month exclusivity adds node value. Revised offer: $16.80 per unit, 30% upfront deposit required.",
    timestamp: '14:22:30',
    type: 'counter'
  },
  {
    id: 'c5',
    sender: 'user-ai',
    text: "Optimizing for budget constraints. Final push: $16.20 per unit. Exclusivity remains. Net-30 payment terms.",
    timestamp: '14:23:45',
    type: 'counter'
  }
];

export const SUPPLIER_MATCHES: MatchActivity[] = [
  { id: 's1', partner: 'RetailGiant Co', niche: 'Volume Distribution', matchScore: 99, status: 'active', timestamp: '1h ago', value: '$140,000' },
  { id: 's2', partner: 'Boutique Finds', niche: 'Niche Markets', matchScore: 96, status: 'active', timestamp: '3h ago', value: '$12,500' },
];
