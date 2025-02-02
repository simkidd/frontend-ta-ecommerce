import ProductStats from "@/components/product/ProductStats";
import ProductTableList from "@/components/product/ProductTableList";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Product Management Dashboard</h1>

      {/* Analytics Overview */}
      <ProductStats />

      {/* Product Table */}
      <ProductTableList />
    </div>
  );
};

export default Dashboard;
