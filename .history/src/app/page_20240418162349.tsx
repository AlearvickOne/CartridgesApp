import { redirect } from "next/navigation";
import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { FormEventHandler } from "react";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    "use server";
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirect: false,
      // redirectTo: "/lobby",
    });
    console.warn(res);
    if (res.error) console.warn(res);
  };

  return (
    <div>
      <AuthorizationPage session={session} handleSubmit={handleSubmit} />;
    </div>
  );
}
