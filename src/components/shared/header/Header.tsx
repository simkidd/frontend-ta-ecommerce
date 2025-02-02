"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Cart from "@/components/cart/Cart";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggler } from "../theme/ThemeToggler";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky z-20 top-0 w-full bg-white dark:bg-sidebar border-b border-b-gray-300 dark:border-b-sidebar-border flex items-center py-3 px-4">
      <div className="w-full flex h-14 items-center">
        {isMobile && (
          <div>
            <SidebarTrigger className="w-8 h-8" />
          </div>
        )}

        <div className="ms-auto flex gap-4">
          <ThemeToggler />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
