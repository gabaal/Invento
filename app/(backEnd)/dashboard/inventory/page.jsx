"use client";

import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {
  Boxes,
  Component,
  FileBadge,
  Proportions,
  Ruler,
  Shirt,
  WarehouseIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Warehouse from "./warehouse/page";

export default function Items() {
  const optionCards = [
    {
      title: "Adjustments",
      description:
        "Tweak your item prices for specific contacts or transactions",
      icon: Proportions,
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
    },
    {
      title: "Brands",
      description:
        "Tweak your item prices for specific contacts or transactions",
      icon: FileBadge,
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
    },
    {
      title: "Categories",
      description: "Stop similar items in categories",
      icon: Boxes,
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      icon: Shirt,
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
    },
    {
      title: "Units",
      description: "Bundle different items together and sell them as kits",
      icon: Ruler,
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
    },
    {
      title: "Warehouses",
      description:
        "Tweak your item prices for specific contacts or transactions",
      icon: WarehouseIcon,
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-2 m-4 py-8 px-16 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
