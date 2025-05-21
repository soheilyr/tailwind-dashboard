"use client";

import { Settings } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Switch } from "@/shared/components/ui/switch";
import { Label } from "@/shared/components/ui/label";

type SidebarOptionsMenuProps = {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  showIcons: boolean;
  onToggleIcons: () => void;
  showLabels: boolean;
  onToggleLabels: () => void;
};

export default function SidebarOptionsMenu({
  isCollapsed,
  onToggleCollapse,
  showIcons,
  onToggleIcons,
  showLabels,
  onToggleLabels,
}: SidebarOptionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Sidebar options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <div className="flex items-center justify-between p-2">
          <Label htmlFor="collapse" className="cursor-pointer">
            Collapse Sidebar
          </Label>
          <Switch
            id="collapse"
            checked={isCollapsed}
            onCheckedChange={onToggleCollapse}
          />
        </div>
        <div className="flex items-center justify-between p-2">
          <Label htmlFor="icons" className="cursor-pointer">
            Show Icons
          </Label>
          <Switch
            id="icons"
            checked={showIcons}
            onCheckedChange={onToggleIcons}
          />
        </div>
        <div className="flex items-center justify-between p-2">
          <Label htmlFor="labels" className="cursor-pointer">
            Show Labels
          </Label>
          <Switch
            id="labels"
            checked={showLabels}
            onCheckedChange={onToggleLabels}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
