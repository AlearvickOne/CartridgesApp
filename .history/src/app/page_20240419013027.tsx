import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";
import { AuthError } from "next-auth";
import { unknown } from "zod";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    "use server";

    try {
      await signIn("credentials", {
        login: login,
        password: password,
        redirectTo: "/lobby",
      });
    } catch (isErr) {
      if (isErr instanceof AuthError) {
        switch (isErr.type) {
          case "CredentialsSignin":
            return { isErr: false };
          default:
            return { isErr: false };
        }
      }
      throw isErr;
    }
    return { err: true };
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
