"use client";
import { fetchProducts } from "@/store/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AlertCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Skeleton } from "../ui/skeleton";
import ProductTable from "./ProductTable";
import { columns } from "./columns";

const ProductTableList = () => {
  const dispatch = useAppDispatch();
  const { products, error, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>
        {/* Render a few skeleton rows as a placeholder */}
        <div className="space-y-2">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="w-full h-10" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <Alert variant="destructive" className="mt-4 max-w-sm mx-auto">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <ProductTable columns={columns} data={products} />
    </div>
  );
};

export default ProductTableList;
