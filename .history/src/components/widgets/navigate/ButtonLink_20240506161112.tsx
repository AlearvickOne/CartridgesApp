"use client";
import { authService } from "@/api/services/authService";
import { AllPagesClass } from "@/app/all-pages.class";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface IButtonLink {
  fnOnClick: () => void;
  children: ReactNode;
}

export const ButtonLink = ({ children }: IButtonLink) => {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      push(AllPagesClass.AUTORIZATION_PAGE);
    },
  });

  return (
    <Link href="#" onClick={() => mutate()}>
      <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">{children}</li>
    </Link>
  );
};
