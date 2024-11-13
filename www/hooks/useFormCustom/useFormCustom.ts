"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { UseFormProps } from "./useFormCustom.types";
import { useRouter } from "next/navigation";
import { useMutation } from "@urql/next";
import { getPodcast } from "@queries";

export const useFormCustom = <T extends { [key: string]: any }, U>({
  initialData,
  mutation,
  onSuccessMessage = "Update successful!",
  onErrorMessage = "Failed to update. Please try again.",
  fields = {},
}: UseFormProps<T>) => {
  const router = useRouter();
  const [formData, setFormData] = useState<T>(initialData);
  const [updateResult, executeUpdate] = useMutation<U>(mutation);

  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!window.confirm("Are you sure you want to update?")) return;

    const transformedData = Object.assign({}, formData) as {
      [key: string]: any;
    };
    console.log(transformedData);
    Object.keys(fields).forEach((key) => {
      if (key in transformedData && fields[key]) {
        transformedData[key] = fields[key](transformedData[key]);
      }
    });
    try {
      const response = await executeUpdate(transformedData);
      console.log("response", response?.data);
      if (response?.data) {
        alert(onSuccessMessage);

        router.refresh();
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error("Update error:", err);
      alert(onErrorMessage);
    }
  };

  return {
    formData,
    isLoading: updateResult.fetching,
    handleChange,
    handleSubmit,
  };
};
