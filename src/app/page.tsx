"use client";

import { QueryProvider } from "@/Providers/QueryProvider";

import { AuthorizationPage } from "./Authorization/page";

export default function Home() {
  return (
    <QueryProvider>
      <AuthorizationPage />
    </QueryProvider>
  );
}
