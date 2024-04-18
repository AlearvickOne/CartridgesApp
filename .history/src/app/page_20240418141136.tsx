"use server";
import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth } from "./api/auth/configs/auth";

export default function Home() {
  const session = auth();
  if (!session) redirect("/api/auth/signin");

  return <AuthorizationPage session={session} />;
}
