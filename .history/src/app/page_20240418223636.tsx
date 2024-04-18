import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";
import { SignInError } from "@auth/core/errors";
import { error } from "console";

export default async function Home() {
  const session = await auth();

  const { message } = new SignInError();
  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    "use server";

    return await signIn("credentials", {
      login: login,
      password: password,
      redirectTo: "/lobby",
    }).catch((err) => console.log("errrr" + err));
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
