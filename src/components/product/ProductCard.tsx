"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProduct } from "@/interfaces/product.interface";
import {
  addToCart,
  removeFromCart,
  setLoading,
} from "@/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Loader2, ShoppingCartIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { cartItems, loading } = useAppSelector((state) => state.cart);
  const { view } = useAppSelector((state) => state.product);

  const { id, name, price, imageUrl } = product;
  const isInCart = cartItems.some((item) => item.id === id);

  const handleCartAction = () => {
    dispatch(setLoading(true));

    try {
      if (isInCart) {
        dispatch(removeFromCart(id));
        toast.success(`Removed ${product.name} from cart`);
      } else {
        dispatch(addToCart(product));
        toast.success(`Added ${product.name} to cart`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while updating the cart");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Card className={`w-full `}>
      {/* Card Content */}
      <CardContent
        className={`p-4 ${
          view === "list" ? "flex-row gap-4" : "flex-col"
        } flex`}
      >
        {/* Image */}
        <div className={`${view === "list" ? "w-20 h-20" : ""}`}>
          <Image
            src={imageUrl}
            alt={name}
            className="w-full object-cover rounded-lg mb-4"
            width={300}
            height={300}
          />
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">${price}</p>

          {view === "list" && (
            <Button
              onClick={handleCartAction}
              variant={isInCart ? "destructive" : "default"}
              className="flex items-center justify-center ml-auto mt-2"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : isInCart ? (
                <>
                  <TrashIcon size={18} /> Remove from Cart
                </>
              ) : (
                <>
                  <ShoppingCartIcon size={18} /> Add to Cart
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>

      {/* Card Footer (Button) */}
      {view === "grid" && (
        <CardFooter className={`p-4 mt-auto`}>
          <Button
            onClick={handleCartAction}
            variant={isInCart ? "destructive" : "default"}
            className="w-full flex items-center justify-center "
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : isInCart ? (
              <>
                <TrashIcon size={18} /> Remove from Cart
              </>
            ) : (
              <>
                <ShoppingCartIcon size={18} /> Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;
