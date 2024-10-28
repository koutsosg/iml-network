import PodcastEditForm from "@components/dashboard-ui/podcastEditForm/PodcastEditForm";
import { fetchGraphQL } from "@utils/urlq";
import { getPodcast } from "@utils/urlq/getPodcast.query";

const Podcast = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch data
  const data = await fetchGraphQL(getPodcast, { slug });

  // Check if data exists
  if (!data || !data.podcasts) {
    return <div>Error loading podcast data</div>;
  }

  const podcast = data.podcasts[0];

  return (
    <div>
      <PodcastEditForm podcast={podcast} />
      {/* Render more podcast details here */}
    </div>
  );
};

export default Podcast;
