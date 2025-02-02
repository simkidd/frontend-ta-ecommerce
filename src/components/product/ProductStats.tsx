"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, ShoppingBag, TrendingUp } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";

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

const ProductStats = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
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
              <h2 className="text-xl font-semibold mt-1">
                {loading ? <Skeleton className="w-24 h-6" /> : stat.value}
              </h2>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductStats;
