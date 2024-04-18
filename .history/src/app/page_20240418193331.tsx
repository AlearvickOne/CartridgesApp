import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (login: string, password: string) => {
    "use server";
    return await signIn("credentials", {
      login: login,
      password: password,
      redirect: false,
      redirectTo: "/lobby",
    });
  };

  return (
    <div>
      <AuthorizationPage session={session} handleSubmit={handleSubmit} />;
    </div>
  );
}
