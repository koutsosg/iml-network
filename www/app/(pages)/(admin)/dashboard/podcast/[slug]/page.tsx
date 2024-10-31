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

  return (
    <div>
      <div>{podcast.title}</div>
      <PodcastEditForm podcast={podcast} />
    </div>
  );
};

export default Podcast;
