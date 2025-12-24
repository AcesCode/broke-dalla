
import { 
  Home, 
  Search, 
  Activity, 
  Settings 
} from 'lucide-react';
import { NavItem, UserProfile } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
  { id: 'feed', label: 'Opportunity Feed', icon: Search, path: '/feed' },
  { id: 'pipes', label: 'Active Pipes', icon: Activity, path: '/pipes' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

export const MOCK_USER: UserProfile = {
  name: 'Alexander Sterling',
  email: 'a.sterling@nichedrop.io',
  avatarUrl: 'https://picsum.photos/seed/sterling/100/100',
  role: 'Strategy Director'
};
