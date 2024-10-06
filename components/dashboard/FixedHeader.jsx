import { CircleHelp, Ellipsis, LayoutGrid, List, Plus } from "lucide-react";
import React from "react";

import Link from "next/link";
export default function FixedHeader({ newLink }) {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4">
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        {/* New */}

        <Link
          href={newLink}
          className="p-1 rounded-md bg-blue-600 px-3 flex items-center space-x-2 text-white"
        >
          <Plus className=" w-4 h-4" />
          <span>New</span>
        </Link>

        {/* Layout */}
        <div className="flex overflow-hidden">
          <button className="bg-gray-300 border-r border-gray-400 p-2 rounded-s-md">
            <List className="w-4 h-4" />
          </button>
          <button className="bg-gray-200 p-2 rounded-e-md">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
        {/* More */}
        <button className="bg-gray-200 p-2 rounded-md">
          <Ellipsis className="w-4 h-4" />
        </button>
        {/* Help */}
        <button className="bg-orange-600 p-2 text-white rounded-md">
          <CircleHelp className=" w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
