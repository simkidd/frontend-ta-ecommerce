"use client";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/store/hooks";
import { ShoppingCartIcon } from "lucide-react";

const CartIcon = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <div className="relative">
      <div className="size-6 flex items-center justify-center">
        <ShoppingCartIcon size={18} />
      </div>
      {cartItems.length > 0 && (
        <Badge className="size-4 p-0 rounded-full flex items-center justify-center absolute -top-1 -right-1 bg-red-500 text-white">
          {cartItems.length}
        </Badge>
      )}
    </div>
  );
};

export default CartIcon;
