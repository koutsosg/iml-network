import {
  PodcastLinkProps,
  PodcastMenuProps,
} from "@components/dashboard-ui/server/podcastMenu/podcastMenu.types";
import Image from "next/image";
import Link from "next/link";
import { fetchRSSFeed } from "wb-rss-parser";

const PodcastLink = async ({ podcast }: PodcastLinkProps) => {
  const rssUrl = "https://feeds.transistor.fm/terror-404";
  const data = await fetchRSSFeed(rssUrl);
  console.log(data);
  return (
    <Link
      href={`/dashboard/podcast/${podcast.slug}`}
      className="flex max-h-60 max-w-60 flex-col gap-2 rounded-lg"
    >
      <Image
        src={podcast.image_url}
        width={240}
        height={240}
        alt="Podcast Image"
        className="max-h-60 rounded-lg object-cover"
        priority
      />
    </Link>
  );
};

export const PodcastMenu = ({ podcasts }: PodcastMenuProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 sm:items-start">
      <div className="flex gap-4">
        <h3 className="text-xl font-semibold capitalize">My podcasts</h3>
        {podcasts && podcasts.length > 0 ? (
          <button className="border">add more</button>
        ) : null}
      </div>
      {podcasts && podcasts.length > 0 ? (
        <div className="xs:grid-cols-2 grid w-full place-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {podcasts.map((podcast) => (
            <PodcastLink key={podcast.id} podcast={podcast} />
          ))}
        </div>
      ) : (
        <div className="grid w-full place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <button className="flex aspect-square max-h-60 w-full max-w-60 flex-col items-center justify-center gap-2 rounded-lg bg-slate-300 text-center">
            <p className="w-full text-lg font-medium">Add podcasts</p>
          </button>
        </div>
      )}
    </div>
  );
};
