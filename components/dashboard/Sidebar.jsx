import {
  BaggageClaim,
  Cable,
  ChartColumnIncreasing,
  ChevronLeft,
  FolderOpen,
  Home,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed">
      {/* Top Part */}

      <div className="flex flex-col">
        {/* Logo */}
        <Link
          href="/"
          className=" flex items-center space-x-2 py-3 px-2 bg-slate-950"
        >
          <BaggageClaim className="w-7 h-7" />
          <span className="text-3xl font-bold italic">Invento</span>
        </Link>
        {/* Links */}

        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
            href="#"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <button className="flex items-center space-x-2 p-2">
            <BaggageClaim className="w-4 h-4" />
            <span>Inventory</span>
          </button>

          <button className="flex items-center space-x-2 p-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sales</span>
          </button>

          <button className="flex items-center space-x-2 p-2">
            <ShoppingBasket className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link className="flex items-center space-x-2 p-2" href="#">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>

          <Link className="flex items-center space-x-2 p-2" href="#">
            <ChartColumnIncreasing className="w-4 h-4" />
            <span>Reports</span>
          </Link>

          <Link className="flex items-center space-x-2 p-2" href="#">
            <FolderOpen className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        {/* Bottom Part */}
        {/* Subscription Card */}
        <SubscriptionCard />
      </div>

      {/* Footer Icon */}
      <div className="flex flex-col">
        <button className=" flex items-center space-x-2 py-3 px-2 justify-center bg-slate-950">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
