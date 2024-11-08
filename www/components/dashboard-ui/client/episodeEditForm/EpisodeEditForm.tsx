"use client";
import Image from "next/image";
import { EpisodeEditFormProps } from "./episodeEditForm.types";
import { Button, InputField, TextAreaField } from "@components/core-ui";
import { useEpisodeForm } from "@hooks";

export const EpisodeEditForm = ({ episode }: EpisodeEditFormProps) => {
  const { formData, updateResult, handleChange, handleSubmit } =
    useEpisodeForm(episode);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 capitalize">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <h1 className="line-clamp-2 content-center text-lg font-semibold sm:text-xl md:text-2xl">
          {formData.title}
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
              src={formData.image_url}
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
            label="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="episode_type"
            label="Episode Type"
            value={formData.episode_type}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="keywords"
            label="Keywords"
            value={formData.keywords}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="image_title"
            label="Image Title"
            value={formData.image_title}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="image_url"
            label="Image URL"
            value={formData.image_url}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <TextAreaField
        name="description"
        value={formData.description}
        label="Description"
        rows={10}
        onChange={handleChange}
        required
      />
    </form>
  );
};
