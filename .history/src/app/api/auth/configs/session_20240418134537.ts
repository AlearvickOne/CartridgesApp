"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";

const session = async () => {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");
};
