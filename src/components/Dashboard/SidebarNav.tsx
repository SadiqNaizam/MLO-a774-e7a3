import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  GraduationCap,
  Shirt,
  Mic2,
  Youtube,
  Settings,
  Flag,
  Home // Added Home as a default first item
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, className }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start h-10 px-3 rounded-lg',
        'text-sm font-medium',
        isActive
          ? 'bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        className
      )}
      asChild
    >
      <a href={href}>
        <Icon className="mr-3 h-5 w-5" />
        {label}
      </a>
    </Button>
  );
};

interface SidebarNavProps {
  className?: string;
}

const mainNavItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#' },
  { id: 'courses', label: 'Courses', icon: GraduationCap, href: '#', isActive: true },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag, href: '#' },
  { id: 'music', label: 'Music', icon: Music2, href: '#' },
  { id: 'movies', label: 'Movies', icon: Film, href: '#' },
  { id: 'live', label: 'Live', icon: Radio, href: '#' },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2, href: '#' },
  { id: 'news', label: 'News', icon: Newspaper, href: '#' },
  { id: 'sports', label: 'Sports', icon: Trophy, href: '#' },
  { id: 'fashion-beauty', label: 'Fashion & Beauty', icon: Shirt, href: '#' },
  { id: 'podcasts', label: 'Podcasts', icon: Mic2, href: '#' },
];

const moreFromYouTubeItems = [
  { id: 'youtube-premium', label: 'YouTube Premium', icon: Youtube, href: '#' },
  { id: 'youtube-music', label: 'YouTube Music', icon: Youtube, href: '#' },
  { id: 'youtube-kids', label: 'YouTube Kids', icon: Youtube, href: '#' },
];

const userNavItems = [
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'report-history', label: 'Report history', icon: Flag, href: '#' },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  return (
    <aside className={cn('h-full w-64 bg-sidebar text-sidebar-foreground flex flex-col', className)}>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} href={item.href} icon={item.icon} label={item.label} isActive={item.isActive} />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-muted-foreground tracking-wider">More from YouTube</h3>
        <nav className="space-y-1">
          {moreFromYouTubeItems.map((item) => (
            <NavItem key={item.id} href={item.href} icon={item.icon} label={item.label} />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <nav className="space-y-1">
          {userNavItems.map((item) => (
            <NavItem key={item.id} href={item.href} icon={item.icon} label={item.label} />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default SidebarNav;
