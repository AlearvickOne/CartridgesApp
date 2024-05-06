"use client";
import { AllPagesClass } from "@/app/all-pages.class";
import { useRouter } from "next/navigation";

export const RedirectFromUndefinedPages = () => {
  const { push } = useRouter();
  push(AllPagesClass.AUTORIZATION_PAGE);

  return <></>;
};
