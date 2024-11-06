"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "urql";
import { updatePodcast } from "@queries";
import { Podcast } from "./podcastEditForm.types";

export const usePodcastForm = (podcast: Podcast) => {
  const [formData, setFormData] = useState({
    description: podcast.description,
    author: podcast.author,
    categories: podcast.categories.join(", "),
    copyright: podcast.copyright,
    funding_url: podcast.funding_url,
    image_title: podcast.image_title,
    image_url: podcast.image_url,
    keywords: podcast.keywords.join(", "),
    owner_email: podcast.owner_email,
    owner_name: podcast.owner_name,
  });

  const [updateResult, executeUpdate] = useMutation(updatePodcast);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!window.confirm("Are you sure you want to update this podcast?"))
      return;

    try {
      const response = await executeUpdate({
        id: podcast.id,
        ...formData,
        categories: formData.categories.split(",").map((cat) => cat.trim()),
        keywords: formData.keywords.split(",").map((keyword) => keyword.trim()),
      });
      console.log(response);
      if (response?.data?.update_podcasts_by_pk) {
        alert("Podcast updated successfully!");
      } else {
        throw new Error("Failed to update the podcast");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating podcast. Please try again.");
    }
  };

  return {
    formData,
    updateResult,
    handleChange,
    handleSubmit,
  };
};
