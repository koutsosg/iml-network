"use client";
import Image from "next/image";
import { PodcastEditFormProps } from "./podcastEditForm.types";
import { Button, InputField, TextAreaField } from "@components/core-ui";
import { usePodcastForm } from "@hooks";

export const PodcastEditForm = ({ podcast }: PodcastEditFormProps) => {
  const { formData, isLoading, handleChange, handleSubmit } =
    usePodcastForm(podcast);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 capitalize">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <h1 className="line-clamp-2 content-center text-lg font-semibold sm:text-xl md:text-2xl">
          {podcast.title}
        </h1>
        <Button isLoading={isLoading} disabled={isLoading} spinner={true}>
          Update Podcast
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
              priority
            />
          </div>
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
        <div className="flex flex-grow flex-col gap-4">
          <InputField
            type="text"
            name="author"
            label="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="categories"
            label="Categories"
            value={formData.categories}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="copyright"
            label="Copyright"
            value={formData.copyright}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="funding_url"
            label="Funding URL"
            value={formData.funding_url}
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
            name="owner_email"
            label="Owner Email"
            value={formData.owner_email}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="owner_name"
            label="Owner Name"
            value={formData.owner_name}
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
