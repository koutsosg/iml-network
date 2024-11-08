export interface Episode {
  id: string;
  author: string;
  description: string;
  title: string;
  image_url: string;
  episode_type: string;
  season: string;
}
export interface PodcastEpisodeListProps {
  episodes: Episode[];
}
