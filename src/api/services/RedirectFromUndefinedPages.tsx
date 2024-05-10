"use client";
import { AllPagesClass } from "@/constants/constants";
import { useRouter } from "next/navigation";

export const RedirectFromUndefinedPages = () => {
  const { push } = useRouter();
  push(AllPagesClass.AUTORIZATION_PAGE);

  return <></>;
};
