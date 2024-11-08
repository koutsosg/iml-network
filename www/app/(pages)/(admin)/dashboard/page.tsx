import LogoutButton from "@components/LogoutButton";
import { getPodcasts } from "@queries";
import { fetchGraphQL } from "@utils/urlq";
import { PodcastMenu } from "@components/dashboard-ui/podcastMenu/PodcastMenu";

export default async function Dashboard() {
  const imlndata = {
    title: "test title",
  };
  const data = await fetchGraphQL(getPodcasts);

  if (!data || !data.podcasts) {
    return <div>No podcasts found</div>;
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <div>iml network data component here</div>

      <PodcastMenu podcasts={data.podcasts} />

      <LogoutButton />
    </main>
  );
}
