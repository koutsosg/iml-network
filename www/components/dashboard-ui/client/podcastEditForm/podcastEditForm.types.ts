export interface PodcastEditFormProps {
  podcast: Podcast;
}
export interface Podcast {
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
}
