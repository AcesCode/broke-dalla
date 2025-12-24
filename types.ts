
import { LucideIcon } from 'lucide-react';

export type AppMode = 'retailer' | 'supplier';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
}

export interface AppState {
  activeTab: string;
  isSidebarOpen: boolean;
  notificationsCount: number;
  mode: AppMode;
}

export interface StatCardData {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export interface MatchActivity {
  id: string;
  partner: string;
  niche: string;
  matchScore: number;
  status: 'pending' | 'active' | 'completed';
  timestamp: string;
  value: string;
}

export interface Opportunity {
  id: string;
  title: string;
  imageUrl: string;
  matchScore: number;
  margin: string;
  shipping: string;
  hypeReason: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user-ai' | 'supplier-ai';
  text: string;
  timestamp: string;
  type?: 'offer' | 'counter' | 'info';
}
