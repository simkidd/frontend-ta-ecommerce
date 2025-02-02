"use client";
import { toggleView } from "@/store/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { GridIcon, ListIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const ProductsView = () => {
  const dispatch = useAppDispatch();
  const { view } = useAppSelector((state) => state.product);

  const handleToggleView = (view: "grid" | "list") => {
    dispatch(toggleView(view));
  };

  return (
    <div className="flex justify-between items-center">
      {/* Grid View Button */}
      <Button
        variant={view === "grid" ? "default" : "ghost"}
        size="icon"
        className="rounded-none"
        onClick={() => handleToggleView("grid")}
      >
        <GridIcon />
      </Button>

      {/* List View Button */}
      <Button
        variant={view === "list" ? "default" : "ghost"}
        size="icon"
        className="rounded-none"
        onClick={() => handleToggleView("list")}
      >
        <ListIcon />
      </Button>
    </div>
  );
};

export default ProductsView;
