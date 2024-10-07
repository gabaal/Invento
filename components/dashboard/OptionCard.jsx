"use client";

import React from "react";
import { Shirt } from "lucide-react";
import Link from "next/link";
export default function OptionCard({ optionData }) {
  const {
    title,
    description,
    icon: Icon,
    link,
    linkTitle,
    enabled,
  } = optionData;

  return (
    <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>
        <Icon strokeWidth=".25px" className="w-32 h-32" />
      </div>
      <p className="line-clamp-1">{description}</p>
      {enabled ? (
        <Link
          href={link}
          className="py-2 rounded-md bg-blue-600 px-3 inline-flex items-center text-white"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="py-2 rounded-md bg-blue-600 px-3 inline-flex items-center text-white">
          Enable
        </button>
      )}
    </div>
  );
}
