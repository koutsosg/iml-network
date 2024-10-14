export default async function Home() {
  let friends;

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
      {
        method: "POST",
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
        },
        body: JSON.stringify({
          query: `query {
          friend {
            name
          }
        }`,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();

    // Handle the data if it's correctly parsed
    if (result.data && result.data.friend) {
      friends = result.data.friend;
    } else {
      throw new Error("Invalid data received from Hasura.");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {friends ? (
          friends.map((friend: { name: string }) => (
            <p key={friend.name}>{friend.name}</p>
          ))
        ) : (
          <p>No friends found</p>
        )}
      </main>
    </div>
  );
}
