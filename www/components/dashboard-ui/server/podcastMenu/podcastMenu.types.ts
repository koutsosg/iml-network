export interface PodcastMenuProps {
  podcasts: Podcast[];
}
export interface Podcast {
  id: string;
  slug: string;
  image_url: string;
  title: string;
}
export interface PodcastLinkProps {
  podcast: Podcast;
}
