"use client";
import {
  fetchProducts,
  setCurrentPage,
} from "@/store/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "./ProductCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { view, products, currentPage, itemsPerPage, loading, error } =
    useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Slice the products based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const viewsClasses =
    view === "grid"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      : "flex flex-col gap-6";

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
    <div>
      {loading ? (
        <div className={viewsClasses}>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 border rounded-md shadow-sm"
            >
              <Skeleton className="w-full h-40 bg-gray-200 dark:bg-sidebar-accent" />
              <Skeleton className="w-3/4 h-4 bg-gray-200 dark:bg-sidebar-accent" />
              <Skeleton className="w-1/2 h-4 bg-gray-200 dark:bg-sidebar-accent" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={viewsClasses}>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Pagination>
              <PaginationContent className="flex items-center gap-2">
                {/* Previous Page Button */}
                {currentPage > 1 && (
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md cursor-pointer"
                  >
                    Previous
                  </PaginationPrevious>
                )}

                {/* Pagination Item with Link */}
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index + 1}>
                    <PaginationLink
                      className="cursor-pointer"
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {/* Next Page Button */}
                {currentPage < totalPages && (
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md cursor-pointer"
                  >
                    Next
                  </PaginationNext>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsList;
