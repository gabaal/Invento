"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/dashboard/FormInputs/SubmitButton";
import TextareaInput from "@/components/dashboard/FormInputs/TextareaInput";
import TextInput from "@/components/dashboard/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBrand() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    makePostRequest(setLoading, "api/brands", data, "brand", reset);
  }
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* Header pass props to FormHeader component */}
      <FormHeader title="New Brand" href="/dashboard/inventory" />

      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Component from here */}

          <TextInput
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Brand" />
      </form>
    </div>
  );
}
