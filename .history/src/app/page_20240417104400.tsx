"use server";

import { QueryProvider } from "@/Providers/QueryProvider";

import AuthorizationPage from "../components/AuthorizationPage";

export default function Home() {
  return (
    <QueryProvider>
      <AuthorizationPage />
    </QueryProvider>
  );
}
