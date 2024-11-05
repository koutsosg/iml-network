"use client";
import Button from "@components/core-ui/Button/Button";
import { InputField } from "@components/core-ui/Input";
import TextAreaField from "@components/core-ui/TextAreaField/TextAreaField";
import { updatePodcast } from "@utils/urlq/updatePodcast.mutate";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "urql";

interface PodcastEditFormProps {
  podcast: {
    id: string;
    title: string;
    description: string;
    author: string;
    categories: string[];
    copyright: string;
    funding_url: string;
    image_title: string;
    image_url: string;
    keywords: string[];
    owner_email: string;
    owner_name: string;
  };
}

const PodcastEditForm = ({ podcast }: PodcastEditFormProps) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 capitalize">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <h1 className="line-clamp-2 content-center text-lg font-semibold sm:text-xl md:text-2xl">
          {podcast.title}
        </h1>
        <Button
          isLoading={updateResult.fetching}
          disabled={updateResult.fetching}
          spinner={true}
        >
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
            />
          </div>
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
            value={formData.image_url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-grow flex-col gap-4">
          <InputField
            type="text"
            name="author"
            label="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="categories"
            label="categories"
            value={formData.categories}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="copyright"
            label="copyright"
            value={formData.copyright}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="funding_url"
            label="funding url"
            value={formData.funding_url}
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
            name="owner_email"
            label="owner email"
            value={formData.owner_email}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="owner_name"
            label="owner name"
            value={formData.owner_name}
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

export default PodcastEditForm;
