import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menu,
  Youtube,
  Search,
  Mic,
  Plus,
  Bell
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, onToggleSidebar }) => {
  return (
    <header 
      className={cn(
        'h-16 flex items-center justify-between px-4 sm:px-6 bg-background border-b border-border fixed top-0 left-0 right-0 z-50',
        className
      )}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        {onToggleSidebar && (
           <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="sm:hidden text-foreground">
             <Menu className="h-6 w-6" />
           </Button>
        )}
        {/* The menu icon for larger screens is typically part of the sidebar itself or managed by a layout component */} 
        {/* For this component, assume it's used in a layout where the sidebar might be static or controlled elsewhere initially */} 
        {/* Based on image, the menu button is always visible */} 
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="text-foreground">
            <Menu className="h-6 w-6" />
        </Button>
        <a href="#" className="flex items-center space-x-2">
          <Youtube className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-foreground tracking-tight">
            YouTube<sup className="text-xs text-muted-foreground">IN</sup>
          </span>
        </a>
      </div>

      <div className="flex-1 max-w-xl mx-4 hidden sm:flex items-center space-x-2">
        <div className="relative flex-grow">
          <Input 
            type="search" 
            placeholder="Search" 
            className="w-full bg-muted border-input focus:border-primary pl-4 pr-10 h-10 rounded-full"
          />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="outline" size="icon" className="rounded-full bg-card text-foreground hover:bg-muted">
          <Mic className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <Button variant="ghost" size="icon" className="sm:hidden text-foreground">
            <Search className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="hidden sm:flex items-center space-x-2 text-foreground border-border hover:bg-muted h-10">
          <Plus className="h-5 w-5" />
          <span>Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted rounded-full">
          <Bell className="h-6 w-6" />
        </Button>
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-primary text-primary-foreground">R</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopHeader;
