"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "urql";
import { Episode } from "./episodeEditForm.types";
import { updateEpisode } from "@queries";

export const useEpisodeForm = (episode: Episode) => {
  const [formData, setFormData] = useState({
    description: episode.description,
    episode_type: episode.episode_type,
    image_url: episode.image_url,
    image_title: episode.image_title,
    keywords: episode.keywords.join(", "),
    title: episode.title,
  });

  const [updateResult, executeUpdate] = useMutation(updateEpisode);

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
    if (!window.confirm("Are you sure you want to update this episode?"))
      return;

    try {
      const response = await executeUpdate({
        id: episode.id,
        ...formData,
        keywords: formData.keywords.split(",").map((keyword) => keyword.trim()),
      });

      if (response?.data?.update_episodes_by_pk) {
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
