import ProductsList from "@/components/product/ProductsList";
import ProductsView from "@/components/product/ProductsView";

const Products = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <ProductsView />
      </div>

      <ProductsList />
    </div>
  );
};

export default Products;
