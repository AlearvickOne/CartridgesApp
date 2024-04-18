"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";

const session = async () => {
  const session = await auth();

  console.log("1" + session);
  if (!session) redirect("/api/auth/signin");
};
