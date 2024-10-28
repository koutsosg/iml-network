import React from "react";
import { ClientProvider } from "@utils/urlq";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@components/LogoutButton";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) {
    redirect("/admin");
  }

  return (
    <ClientProvider token={authToken}>
      <div>
        Dashboard <LogoutButton />
      </div>
      {children}
    </ClientProvider>
  );
}
