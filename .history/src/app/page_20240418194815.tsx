import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (login: string, password: string) => {
    "use server";
    try {
      return await signIn("credentials", {
        login: login,
        password: password,
        redirect: true,
        redirectTo: "/lobby",
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
