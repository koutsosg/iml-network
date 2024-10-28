"use client";
import { InputField } from "@components/core-ui/Input";
import { updatePodcast } from "@utils/urlq/updatePodcast.mutate";
import React, { useRef } from "react";
import { useMutation } from "urql";

interface PodcastEditFormProps {
  podcast: { id: number; title: string; description: string };
}

const PodcastEditForm: React.FC<PodcastEditFormProps> = ({ podcast }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  //const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [updateResult, executeUpdate] = useMutation(updatePodcast);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const title = titleRef.current?.value || podcast.title;
    console.log("updateresult", updateResult);
    //const description = descriptionRef.current?.value || podcast.description;
    try {
      const response = await executeUpdate({
        id: podcast.id,
        title,
      });

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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputField
        label="Title"
        defaultValue={podcast.title}
        inputRef={titleRef}
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Update Podcast
      </button>
    </form>
  );
};

export default PodcastEditForm;
