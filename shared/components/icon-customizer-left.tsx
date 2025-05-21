"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

interface IconCustomizerLeftProps {
  icons: {
    name: string;
    component: React.ReactNode;
  }[];
  onSelect: (iconName: string) => void;
  selectedIcon?: string;
}

export function IconCustomizerLeft({
  icons,
  onSelect,
  selectedIcon,
}: IconCustomizerLeftProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col space-y-4">
      <div className="flex items-center space-x-2 px-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-8"
        />
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="grid grid-cols-4 gap-2">
          {filteredIcons.map((icon) => (
            <Button
              key={icon.name}
              variant="ghost"
              size="icon"
              className={cn(
                "h-12 w-12",
                selectedIcon === icon.name && "bg-accent"
              )}
              onClick={() => onSelect(icon.name)}
            >
              {icon.component}
              <span className="sr-only">{icon.name}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
