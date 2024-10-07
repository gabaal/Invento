"use client";

import SelectInput from "@/components/dashboard/FormInputs/SelectInput";
import SubmitButton from "@/components/dashboard/FormInputs/SubmitButton";
import TextareaInput from "@/components/dashboard/FormInputs/TextareaInput";
import TextInput from "@/components/dashboard/FormInputs/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm() {
  const branches = [
    {
      label: "Warehouse 1",
      value: "warehouse1",
    },
    {
      label: "Branch 1",
      value: "branch1",
    },
    {
      label: "Branch 2",
      value: "branch2",
    },
    {
      label: "Branch 3",
      value: "branch3",
    },
    {
      label: "Branch 4",
      value: "branch4",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Component from here */}

        <SelectInput
          name="givingWarehouseId"
          label="Select the Warehouse that will Give Stock"
          register={register}
          className="w-full"
          options={branches}
        />
        <SelectInput
          name="receivingWarehouseId"
          label="Select the Warehouse to Receive Stock"
          register={register}
          className="w-full"
          options={branches}
        />
        <TextInput
          label="Enter Quantity of Stock to Transfer"
          name="transferStockQty"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />
      </div>
      <SubmitButton isLoading={loading} title="Adjustment" />
    </form>
  );
}
