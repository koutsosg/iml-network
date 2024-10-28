import React from "react";
import { ClientProvider } from "@utils/urlq";
import { cookies } from "next/headers";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  return <ClientProvider token={authToken}>{children}</ClientProvider>;
}
