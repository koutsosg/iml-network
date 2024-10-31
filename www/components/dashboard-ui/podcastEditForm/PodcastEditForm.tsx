"use client";
import Button from "@components/core-ui/Button/Button";
import { InputField } from "@components/core-ui/Input";
import TextAreaField from "@components/core-ui/TextAreaField/TextAreaField";
import { updatePodcast } from "@utils/urlq/updatePodcast.mutate";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useMutation } from "urql";

interface PodcastEditFormProps {
  podcast: {
    id: number;
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

const PodcastEditForm: FC<PodcastEditFormProps> = ({ podcast }) => {
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextAreaField
        name="description"
        value={formData.description}
        label="DESCRIPTION"
        rows={10}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="author"
        label="AUTHOR"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="categories"
        label="CATEGORIES"
        value={formData.categories}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="copyright"
        label="COPYRIGHT"
        value={formData.copyright}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="funding_url"
        label="FUNDING URL"
        value={formData.funding_url}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="image_title"
        label="IMAGE TITLE"
        value={formData.image_title}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="image_url"
        label="IMAGE URL"
        value={formData.image_url}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="keywords"
        label="KEYWORDS"
        value={formData.keywords}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="owner_email"
        label="OWNER EMAIL"
        value={formData.owner_email}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="owner_name"
        label="OWNER NAME"
        value={formData.owner_name}
        onChange={handleChange}
        required
      />
      <Button
        isLoading={updateResult.fetching}
        disabled={updateResult.fetching}
        spinner={true}
      >
        Update Podcast
      </Button>
    </form>
  );
};

export default PodcastEditForm;
