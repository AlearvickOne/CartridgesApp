"use client";

import { QueryProvider } from "@/Providers/QueryProvider";

import AuthorizationPage from "./AuthorizationPage";

export default function Home() {
  return (
    <QueryProvider>
      <AuthorizationPage />
    </QueryProvider>
  );
}
