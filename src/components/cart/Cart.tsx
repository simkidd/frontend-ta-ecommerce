"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/store/hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import CartIcon from "./cartIcon";

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger >
        <CartIcon />
      </SheetTrigger>
      <SheetContent className="h-full">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2">
              Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </div>
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="mt-4">
              <ScrollArea className="h-80">
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </ScrollArea>
            </div>

            <SheetFooter>
              <div className="flex flex-col w-full">
                <div className="my-4 p-4 bg-gray-100 dark:bg-sidebar-accent rounded-lg flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-xl font-semibold">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>

                <Button>Proceed to Checkout</Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
