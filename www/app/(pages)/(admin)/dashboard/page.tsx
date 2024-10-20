import { fetchGraphQL } from "../../../utils/urlq/fetchGraphQL";
import { PODCASTSQUERY } from "../../../utils/urlq/queries";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const isAdminLoggedIn = true;

  if (!isAdminLoggedIn) {
    redirect("/admin");
  }

  const data = await fetchGraphQL(PODCASTSQUERY);
  console.log(data);
  if (!data || !data.podcasts) {
    return <div>No friends found</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        my podcasts
        {data.podcasts.map((podcast: { id: number; title: string }) => (
          <div className="capitalize " key={podcast.id}>
            {podcast.title}
          </div>
        ))}
      </main>
    </div>
  );
}
