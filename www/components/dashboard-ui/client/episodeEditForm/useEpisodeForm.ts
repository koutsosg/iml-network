"use client";
import { useFormCustom } from "@hooks";
import { Episode } from "./episodeEditForm.types";
import { updateEpisode } from "@queries";

export const useEpisodeForm = (episode: Episode) => {
  const { formData, isLoading, handleChange, handleSubmit } = useFormCustom({
    initialData: {
      id: episode.id,
      description: episode.description,
      episode_type: episode.episode_type,
      image_url: episode.image_url,
      image_title: episode.image_title,
      keywords: episode.keywords.join(", "),
      title: episode.title,
    },
    mutation: updateEpisode,
    onSuccessMessage: "Episode updated successfully!",
    fields: {
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
