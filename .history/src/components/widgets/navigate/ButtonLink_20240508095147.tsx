"use client";
import { authService } from "@/api/services/authService";
import { AllPagesClass } from "@/constants/constants";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface IButtonLink {
  fnOnClick: () => void;
  children: ReactNode;
}

export const ButtonSignOut = () => {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      alert("Выход выполнен");
      push(AllPagesClass.AUTORIZATION_PAGE);
    },
  });

  return (
    <Link href="#" onClick={() => mutate()}>
      <p className="bg-slate-100 py-2 px-5 rounded-[10px] hover:bg-yellow-100">Выход</p>
    </Link>
  );
};
