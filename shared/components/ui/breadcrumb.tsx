"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  items: {
    title: string;
    href?: string;
  }[];
  separator?: React.ReactNode;
}

export function Breadcrumb({
  items,
  separator = <ChevronRightIcon className="h-4 w-4" />,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "flex items-center space-x-1 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <span
              key={item.href}
              className="font-medium text-foreground"
              aria-current="page"
            >
              {item.title}
            </span>
          );
        }

        return (
          <React.Fragment key={item.href}>
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
            <span className="mx-2">{separator}</span>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
