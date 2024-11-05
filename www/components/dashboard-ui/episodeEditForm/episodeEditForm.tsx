"use client";
import Button from "@components/core-ui/Button/Button";
import { InputField } from "@components/core-ui/Input";
import TextAreaField from "@components/core-ui/TextAreaField/TextAreaField";
import { updateEpisode } from "@utils/urlq/updateEpisode.mutate";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "urql";

interface EpisodeEditFormProps {
  episode: {
    id: string;
    author: string;
    description: string;
    episode_type: string;
    image_href: string;
    image_title: string;
    keywords: string[];
    link: string;
    media_length: string;
    media_type: string;
    media_url: string;
    pub_dates: string;
    season: string;
    title: string;
    chapters_type: string;
    chapters_url: string;
    podcast_id: string;
  };
}

const EpisodeEditForm = ({ episode }: EpisodeEditFormProps) => {
  const [formData, setFormData] = useState({
    description: episode.description,
    episode_type: episode.episode_type,
    image_href: episode.image_href,
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 capitalize">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <h1 className="line-clamp-2 content-center text-lg font-semibold sm:text-xl md:text-2xl">
          {episode.title}
        </h1>
        <Button
          isLoading={updateResult.fetching}
          disabled={updateResult.fetching}
          spinner={true}
        >
          Update Episode
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-auto flex-col gap-4">
          <div className="flex w-full justify-center">
            <Image
              src={formData.image_href}
              width={340}
              height={340}
              alt="Podcast Image"
              className="rounded-lg object-contain md:h-auto"
            />
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-4">
          <InputField
            type="text"
            name="title"
            label="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            name="episode_type"
            label="episode type"
            value={formData.episode_type}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="keywords"
            label="keywords"
            value={formData.keywords}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="image_title"
            label="image title"
            value={formData.image_title}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="image_url"
            label="Image url"
            value={formData.image_href}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <TextAreaField
        name="description"
        value={formData.description}
        label="description"
        rows={10}
        onChange={handleChange}
        required
      />
    </form>
  );
};
export default EpisodeEditForm;
