"use client";
import styles from "@/styles/home/Home.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ISession {
  handleSubmit: (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => Promise<{ isError?: boolean }>;
}

function AuthorizationPage({ handleSubmit }: ISession) {
  const [errorMessage, setErrorMessage] = useState<boolean>();

  return <></>;
}

export default AuthorizationPage;
