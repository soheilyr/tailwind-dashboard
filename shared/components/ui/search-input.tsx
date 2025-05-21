"use client";

import * as React from "react";
import { SearchIcon } from "@radix-ui/react-icons";
import { useDebounce } from "@/hooks/use-debounce";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  debounceTime?: number;
  isLoading?: boolean;
}

export function SearchInput({
  onSearch,
  debounceTime = 300,
  isLoading,
  className,
  ...props
}: SearchInputProps) {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, debounceTime);

  React.useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className={cn("pl-8", isLoading && "pr-8", className)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {isLoading && (
        <div className="absolute right-2.5 top-2.5">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  );
}
