"use client";
import {
  UrqlProvider,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
import { useMemo } from "react";

export function ClientProvider({ children }: React.PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({ isClient: typeof window !== "undefined" });
    const client = createClient({
      url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
