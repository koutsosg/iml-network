"use client";
import {
  UrqlProvider,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
import { useMemo } from "react";
type Props = {
  children: React.ReactNode;
  token: string | undefined;
};
export function ClientProvider({ children, token }: Props) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
      exchanges: [cacheExchange, ssr, fetchExchange],
      fetchOptions: {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
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
