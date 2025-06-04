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

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onToggleSidebar }) => {
  return (
    <header 
      className={cn(
        'h-16 flex items-center justify-between px-4 sm:px-6 bg-background border-b border-border fixed top-0 left-0 right-0 z-50',
        className
      )}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Menu button for sidebar toggle, consistently visible based on requirements */}
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
            className="w-full bg-muted border-input focus:border-primary pl-4 pr-10 h-10 rounded-full text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="outline" size="icon" className="rounded-full bg-card text-foreground hover:bg-muted border-border">
          <Mic className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <Button variant="ghost" size="icon" className="sm:hidden text-foreground hover:bg-muted rounded-full">
            <Search className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="hidden sm:flex items-center space-x-2 text-foreground border-border hover:bg-muted h-10 px-3">
          <Plus className="h-5 w-5 mr-1" /> 
          <span>Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted rounded-full">
          <Bell className="h-6 w-6" />
        </Button>
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback className="bg-primary text-primary-foreground">R</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
