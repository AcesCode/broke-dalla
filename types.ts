
import { LucideIcon } from 'lucide-react';

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
}
