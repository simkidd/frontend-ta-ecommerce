"use client";
import { IProduct } from "@/interfaces/product.interface";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDownIcon, PenIcon, TrashIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";
import DescriptionModal from "./DescriptionModal";
import { formatCurrency } from "@/utils/formatCurrency";

export const columns: ColumnDef<IProduct>[] = [
  {
    id: "sn",
    header: () => <div className="font-semibold text-nowrap">S/N</div>,
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "imageUrl",
    header: () => <div className="font-semibold text-nowrap">Image</div>,
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={50}
            height={50}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="font-semibold flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const product = row.original;
      return <div className="min-w-44">{product.name}</div>;
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="font-semibold text-nowrap">Category</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div
          className="font-semibold flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      return <div className="font-medium">{formatCurrency(price)}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: () => <div className="font-semibold">Stock</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center gap-2 justify-end">
          <DescriptionModal product={product} />

          <Button
            variant="secondary"
            size="icon"
            onClick={() =>
              toast(product.name, {
                description: "You have edited this product",
                action: {
                  label: <XIcon size={16} />,
                  onClick: () => console.log("Close clicked"),
                },
              })
            }
          >
            <PenIcon />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={() =>
              toast(product.name, {
                description: "Product has been deleted",
                action: {
                  label: <XIcon size={16} />,
                  onClick: () => console.log("Close clicked"),
                },
              })
            }
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
