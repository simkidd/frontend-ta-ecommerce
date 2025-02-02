"use client"
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Cart from "../cart/Cart";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <div className="sticky z-20 top-0 w-full bg-white border-b border-b-gray-300 flex items-center py-3 px-4">
      {isMobile && (
        <div>
          <SidebarTrigger size="icon" />
        </div>
      )}

      <div className="ms-auto">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
