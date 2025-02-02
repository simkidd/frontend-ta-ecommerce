import ProductTableList from "@/components/product/ProductTableList";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, ShoppingBag, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "1,245",
    icon: ShoppingBag,
    color: "bg-blue-500",
  },
  {
    title: "Revenue",
    value: "$58,930",
    icon: CreditCard,
    color: "bg-green-500",
  },
  {
    title: "Top Product",
    value: "Wireless Headphones",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Product Management Dashboard</h1>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="flex items-center p-6 border bg-white dark:bg-sidebar-accent shadow-none"
          >
            <CardContent className="w-full flex items-center p-0">
              <div
                className={`p-3 rounded-full text-white ${stat.color} shadow-md`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  {stat.title}
                </p>
                <h2 className="text-xl font-semibold">{stat.value}</h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Product Table */}
      <ProductTableList />
    </div>
  );
};

export default Dashboard;
