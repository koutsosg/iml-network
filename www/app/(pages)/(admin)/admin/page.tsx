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
    <div className="">
      <h1>Login</h1>
      <LogInForm />
    </div>
  );
}
