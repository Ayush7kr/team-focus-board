
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div className="animate-slide-in">
        <h1 className="text-2xl md:text-3xl font-display font-semibold">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="relative flex-1 md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-full"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal text-xs rounded-full flex items-center justify-center text-white">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <div className="p-2 font-medium border-b">
              Notifications (3)
            </div>
            <DropdownMenuItem className="py-3 px-4 cursor-pointer">
              <div>
                <p className="font-medium">Task deadline approaching</p>
                <p className="text-sm text-muted-foreground">Project report due in 24 hours</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 px-4 cursor-pointer">
              <div>
                <p className="font-medium">New comment on task</p>
                <p className="text-sm text-muted-foreground">Sarah commented on "Research Paper"</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 px-4 cursor-pointer">
              <div>
                <p className="font-medium">Task assigned to you</p>
                <p className="text-sm text-muted-foreground">Team leader assigned you "Presentation Slides"</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardHeader;
