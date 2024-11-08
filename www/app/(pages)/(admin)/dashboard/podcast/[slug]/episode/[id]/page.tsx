import { EpisodeEditForm } from "@components/dashboard-ui/client";
import { fetchGraphQL } from "@utils/urlq";
import { getEpisode } from "@queries";

const Episode = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await fetchGraphQL(getEpisode, { id });

  if (!data || !data.episodes_by_pk) {
    return <div>Error Loading episode</div>;
  }

  return <EpisodeEditForm episode={data.episodes_by_pk} />;
};

export default Episode;
