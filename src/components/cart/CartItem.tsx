import { ICartItem } from "@/interfaces/cart.interface";
import { removeFromCart } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";

const CartItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success(`Removed ${item.name} from cart`);
  };

  return (
    <div className="flex items-center gap-4 py-2">
      <Image src={item.imageUrl} alt={item.name} width={60} height={60} />

      <div className="flex-1">
        <p className="font-medium text-sm">{item.name}</p>
        <p className="font-semibold">
          {formatCurrency(parseFloat(item.price))}
        </p>
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="text-red-500"
        onClick={handleRemove}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
