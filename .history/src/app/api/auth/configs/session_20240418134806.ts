"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const Session = async () => {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return session;
};
