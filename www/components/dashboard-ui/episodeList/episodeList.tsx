"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Episode {
  id: string;
  author: string;
  description: string;
  title: string;
  image_href: string;
  episode_type: string;
  season: string;
}

interface PodcastEpisodeListProps {
  episodes: Episode[];
}

const PodcastEpisodeList = ({ episodes }: PodcastEpisodeListProps) => {
  const pathname = usePathname();

  return (
    <>
      <h3 className="text-xl font-semibold capitalize">episode list</h3>
      <div className="flex flex-col gap-4">
        {episodes.map((episode) => {
          return (
            <Link
              key={episode.id}
              href={`${pathname}/episode/${episode.id}`}
              className="flex gap-3 rounded-lg border px-6 py-3"
            >
              <Image
                src={episode.image_href}
                width={80}
                height={80}
                alt="test"
                className="h-auto rounded-lg bg-black object-contain"
              />
              <div className="flex flex-col justify-between overflow-hidden">
                <h4 className="text-nowrap">{episode.title}</h4>
                <div className="capitalize">Season: {episode.season}</div>
                <div className="capitalize">
                  Episode Type: {episode.episode_type}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default PodcastEpisodeList;
