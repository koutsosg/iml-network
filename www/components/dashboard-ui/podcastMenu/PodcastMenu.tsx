import Image from "next/image";
import Link from "next/link";

export interface PodcastMenuProps {
  podcasts: Podcast[];
}
export interface Podcast {
  id: string;
  slug: string;
  image_url: string;
  title: string;
}
interface PodcastLinkProps {
  podcast: Podcast;
}

const PodcastLink = ({ podcast }: PodcastLinkProps) => {
  return (
    <Link
      href={`/dashboard/podcast/${podcast.slug}`}
      className="flex max-h-60 flex-col items-center"
    >
      <Image
        src={podcast.image_url}
        width={240}
        height={240}
        alt="Podcast Image"
        className="rounded-lg object-contain"
        priority
      />
      <div className="text-center capitalize">{podcast.title}</div>
    </Link>
  );
};

export const PodcastMenu = ({ podcasts }: PodcastMenuProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex gap-4">
        <h3 className="text-xl font-semibold capitalize">My podcasts</h3>
        <div>add more</div>
      </div>
      {!podcasts ? (
        <div>no podcasts</div>
      ) : (
        <div className="xs:grid-cols-2 grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {podcasts.map((podcast) => (
            <PodcastLink key={podcast.id} podcast={podcast} />
          ))}
        </div>
      )}
    </div>
  );
};
