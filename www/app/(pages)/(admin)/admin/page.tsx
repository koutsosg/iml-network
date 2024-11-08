import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LogInForm from "@components/loginForm";

export default async function LogIn() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  if (authToken) {
    redirect("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-300 capitalize">
      <div className="flex flex-col items-center gap-6 rounded-xl border-2 bg-gray-200 p-10">
        <h1>Login</h1>
        <LogInForm />
      </div>
    </main>
  );
}
