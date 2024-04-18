import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    "use server";
    try {
      if (session) redirect("/lobby");
      return await signIn("credentials", {
        login: login,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />;
    </div>
  );
}
