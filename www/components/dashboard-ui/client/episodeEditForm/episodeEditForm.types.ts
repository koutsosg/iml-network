export interface EpisodeEditFormProps {
  episode: Episode;
}
export interface Episode {
  id: string;
  author: string;
  description: string;
  episode_type: string;
  image_url: string;
  image_title: string;
  keywords: string[];
  title: string;
}
