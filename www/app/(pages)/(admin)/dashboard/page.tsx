import { PODCASTSQUERY } from "@utils/urlq/queries";
import { fetchGraphQL } from "@utils/urlq";
import LogoutButton from "@components/LogoutButton";
import Link from "next/link";

export default async function Dashboard() {
  const data = await fetchGraphQL(PODCASTSQUERY);

  if (!data || !data.podcasts) {
    return <div>No podcasts found</div>;
  }

  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <div>iml network data component here</div>
      <div>
        my podcasts
        {data.podcasts.map(
          (podcast: { id: string; title: string; slug: string }) => (
            <Link key={podcast.id} href={`/dashboard/podcast/${podcast.slug}`}>
              <div className="capitalize" key={podcast.id}>
                {podcast.title}
              </div>
            </Link>
          ),
        )}
      </div>
      <LogoutButton />
    </main>
  );
}
