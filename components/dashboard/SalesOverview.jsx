import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function SalesOverview() {
  const inventorySummary = [
    {
      title: "Quantity In Hand",
      number: 6,
    },
    {
      title: "Quantity To Be Recieved",
      number: 11,
    },
  ];

  const salesActivity = [
    {
      title: "To Be Packed",
      number: 6,
      units: "Qty",
      href: "#",
      color: "text-blue-500",
    },
    {
      title: "To Be Shipped",
      number: 3,
      units: "Pkgs",
      href: "#",
      color: "text-red-500",
    },
    {
      title: "To Be Delivered",
      number: 2,
      units: "Pkgs",
      href: "#",
      color: "text-green-500",
    },
    {
      title: "To Be Invoiced",
      number: 5,
      units: "Qty",
      href: "#",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4">
      {/* SALES ACTIVITY */}
      <div className="col-span-8 border-r border-slate-200 p-8">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className=" pr-8 grid grid-cols-4 gap-4">
          {/* CARDS */}

          {salesActivity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} />;
          })}
        </div>
      </div>
      {/* INVENTORY SUMMARY */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
          {inventorySummary.map((item, i) => {
            return <InventorySummaryCard item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
