import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PODCASTSQUERY } from "@utils/urlq/queries";
import { fetchGraphQL } from "@utils/urlq";
import LogoutButton from "@components/LogoutButton";
import Link from "next/link";

export default async function Dashboard() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  const data = await fetchGraphQL(PODCASTSQUERY);

  if (!authToken) {
    redirect("/admin");
  }

  if (!data || !data.podcasts) {
    return <div>No podcasts found</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        my podcasts
        {data.podcasts.map(
          (podcast: { id: number; title: string; slug: string }) => (
            <Link href={`/dashboard/podcast/${podcast.slug}`}>
              <div className="capitalize " key={podcast.id}>
                {podcast.title}
              </div>
            </Link>
          )
        )}
        <LogoutButton />
      </main>
    </div>
  );
}
