"use client";
import React, { useEffect } from "react";
import ProductTable from "./ProductTable";
import { columns } from "./columns";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setProducts } from "@/store/features/product/productSlice";
import { products as productsData } from "@/data/products";

const ProductTableList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Product List</h2>
      <ProductTable columns={columns} data={products} />
    </div>
  );
};

export default ProductTableList;
