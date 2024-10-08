"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/dashboard/FormInputs/SelectInput";
import SubmitButton from "@/components/dashboard/FormInputs/SubmitButton";
import TextareaInput from "@/components/dashboard/FormInputs/TextareaInput";
import TextInput from "@/components/dashboard/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewWarehouse() {
  const selectOptions = [
    {
      label: "Main",
      value: "main",
    },
    {
      label: "Branch",
      value: "branch",
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

    makePostRequest(setLoading, "api/warehouses", data, "warehouses", reset);
  }
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* Header pass props to FormHeader component */}
      <FormHeader title="New warehouse" href="/dashboard/inventory" />

      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Component from here */}
          <SelectInput
            name="type"
            label="Select the Warehouse Type"
            register={register}
            className="w-full"
            options={selectOptions}
          />

          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Warehouse" />
      </form>
    </div>
  );
}
