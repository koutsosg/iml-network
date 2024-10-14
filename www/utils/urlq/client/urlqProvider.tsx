/* "use client";
import {
  UrqlProvider,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
import { Suspense, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export function ClientProvider({ children }: Props) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({ isClient: false });
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
 */
