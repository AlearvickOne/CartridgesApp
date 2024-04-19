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
    } catch (isError) {
      if (isError instanceof AuthError) {
        switch (isError.type) {
          case "CredentialsSignin":
            return "Invalid user";
          default:
            return "Not found error";
        }
      }
      throw isError;
    }
    return { isErr: false };
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />
    </div>
  );
}
