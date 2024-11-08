import { fetchGraphQL } from "@utils/urlq";
import { getPodcast } from "@queries";
import {
  PodcastEditForm,
  PodcastEpisodeList,
} from "@components/dashboard-ui/client";

const Podcast = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await fetchGraphQL(getPodcast, { slug });

  if (!data || !data.podcasts) {
    return <div>Error loading podcast data</div>;
  }

  const podcast = data.podcasts[0];
  const { episodes, ...podcastInfo } = podcast;

  return (
    <>
      <PodcastEditForm podcast={podcastInfo} />
      <PodcastEpisodeList episodes={episodes} />
    </>
  );
};

export default Podcast;
