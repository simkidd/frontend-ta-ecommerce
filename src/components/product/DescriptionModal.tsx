import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";

const DescriptionModal = ({ product }: { product: IProduct }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="View product details"
        >
          <EyeIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2 items-center">
          <div className="flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={280}
              height={280}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-2 text-gray-600">
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              Price:{" "}
              <span className="text-green-600">
                {formatCurrency(product.price)}
              </span>
            </p>
            <p className="text-sm">
              Stock:{" "}
              <span
                className={
                  product.stock > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {product.stock > 0
                  ? `${product.stock} available`
                  : "Out of stock"}
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DescriptionModal;
