import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CollapsibleLink({ href, title }) {
  return (
    <Link
      className="flex justify-between items-center pl-9 pr-4 hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-xl space-x-3"
      href={href}
    >
      <span className="text-sm">{title}</span>
      <PlusCircle className="w-4 h-4" />
    </Link>
  );
}
