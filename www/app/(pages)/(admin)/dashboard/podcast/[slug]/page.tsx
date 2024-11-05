import PodcastEpisodeList from "@components/dashboard-ui/episodeList/episodeList";
import PodcastEditForm from "@components/dashboard-ui/podcastEditForm/PodcastEditForm";
import { fetchGraphQL } from "@utils/urlq";
import { getPodcast } from "@utils/urlq/getPodcast.query";

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
