import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    "use server";

    const { message } = new SignInError();
    try {
      return await signIn("credentials", {
        login: login,
        password: password,
        redirectTo: "/lobby",
      });
    } catch {
      // console.log(message);
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
