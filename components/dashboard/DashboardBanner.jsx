"use client";

import { CreditCard, Globe, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "flex grid-col-12 items-center py-6 px-16 bg-white gap-3 relative"
      }`}
    >
      {/* ICON */}
      <div className="flex items-center col-span-2">
        <CreditCard className="w-16 h-16 text-slate-500 " />{" "}
        <Globe className="w-12 h-12 text-slate-500 " />
      </div>

      {/* TEXT */}
      <div className="col-span-6">
        <h2 className="font-bold text-2xl">Start accepting online payments.</h2>
        <p>
          Businesses are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      {/* BUTTON */}
      <div className="col-span-2">
        <button className="py-2.5 px-8 uppercase bg-blue-500 text-white rounded-xl text-sm">
          Enable
        </button>
      </div>
      {/* CLOSE X BUTTON*/}
      <button
        onClick={() => setHidden(true)}
        className="col-span-1 absolute top-4 right-4"
      >
        <X className="text-slate-600" />
      </button>
    </div>
  );
}
