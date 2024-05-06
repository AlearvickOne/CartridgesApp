"use client";
import { AllPagesClass } from "@/app/all-pages.class";
import { useRouter } from "next/router";

export const redirectFromUndefinedPages = () => {
  const { push } = useRouter();
  push(AllPagesClass.AUTORIZATION_PAGE);
};
