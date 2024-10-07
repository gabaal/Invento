"use client";

import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { PackageOpen, PackagePlus } from "lucide-react";

import React, { useState } from "react";

export default function NewAdjustment() {
  const tabs = [
    {
      title: "Add Stock",
      icon: PackagePlus,
      form: "add",
    },
    {
      title: "Transfer Stock",
      icon: PackageOpen,
      form: "transfer",
    },
  ];

  const [activeForm, setActiveForm] = useState("add");
  return (
    <div>
      {/* Header pass props to FormHeader component */}
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />

      {/* Tabs */}
      <div class="border-b border-gray-200 dark:border-gray-700 w-full max-w-4xl px-4 py-2 bg-white border mx-auto my-4 shadow rounded-lg">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <li key={i} class="me-2">
                <button
                  onClick={() => {
                    setActiveForm(tab.form);
                  }}
                  className={`${
                    activeForm === tab.form
                      ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                      : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                  } `}
                >
                  <Icon className="w-6 h-6 me-2  group-hover:text-gray-500" />
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Form */}

      {activeForm === "add" ? <AddInventoryForm /> : <TransferInventoryForm />}
    </div>
  );
}
