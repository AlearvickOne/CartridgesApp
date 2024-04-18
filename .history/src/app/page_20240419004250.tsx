"use server";
import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";
import { AuthError } from "next-auth";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    try {
      await signIn("credentials", {
        login: login,
        password: password,
        redirectTo: "/lobby",
      });
    } catch (err) {
      if (err instanceof AuthError) {
        switch (err.type) {
          case "CredentialsSignin":
            return { err: "invalid Credentials" };
          default:
            return { err: "unknown Error Found" };
        }
      }
      throw err;
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
