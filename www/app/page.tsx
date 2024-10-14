import React from "react";
import { FRIENDS_QUERY } from "../utils/urlq/queries";
import { fetchGraphQL } from "../utils/urlq/fetchGraphQL";
type Friend = {
  name: string;
};
export default async function Home() {
  const data = await fetchGraphQL(FRIENDS_QUERY);

  if (!data || !data.friends) {
    return <div>No friends found</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.friends.map((friend: Friend) => (
          <div className="capitalize " key={friend.name}>
            {friend.name}
          </div>
        ))}
      </main>
    </div>
  );
}
