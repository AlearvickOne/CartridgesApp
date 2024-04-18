"use server";
import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth } from "./api/auth/configs/auth";

export default async function Home() {
  const { session } = await auth();
  if (!session) redirect("/api/auth/signin");

  return (
    <div>
      <AuthorizationPage session={session} />;
    </div>
  );
}
