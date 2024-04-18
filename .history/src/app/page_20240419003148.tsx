import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (formData: FormData) => {
    "use server";

    await signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirectTo: "/lobby",
    });
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
