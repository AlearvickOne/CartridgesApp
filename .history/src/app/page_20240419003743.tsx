"use server";
import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";
import { AuthError } from "next-auth";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (formData: FormData) => {
    try {
      await signIn("credentials", {
        login: formData.get("login"),
        password: formData.get("password"),
        redirectTo: "/lobby",
      });
    } catch (err) {
      if (err instanceof AuthError) {
        switch (err.type) {
          case "CredentialsSignin":
            return { err: "invalid Credentials" };
          default:
            return { err: un };
        }
      }
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
