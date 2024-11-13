"use client";
import { useFormCustom } from "@hooks";
import { Podcast } from "./podcastEditForm.types";
import { updatePodcast } from "@queries";

export const usePodcastForm = (podcast: Podcast) => {
  const { formData, isLoading, handleChange, handleSubmit } = useFormCustom({
    initialData: {
      id: podcast.id,
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
    },
    mutation: updatePodcast,
    onSuccessMessage: "Podcast updated successfully!",
    fields: {
      categories: (value) => value.split(",").map((cat) => cat.trim()),
      keywords: (value) => value.split(",").map((keyword) => keyword.trim()),
    },
  });

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
