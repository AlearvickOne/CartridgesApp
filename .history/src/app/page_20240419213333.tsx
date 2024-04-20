import AuthorizationPage from "../components/AuthorizationPage";
import { auth, signIn } from "./api/auth/configs/auth";
import { AuthError } from "next-auth";

export default async function Home() {
  const session = await auth();

  const handleSubmit = async (
    login: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    "use server";

    try {
      await signIn("credentials", {
        login: login,
        password: password,
        redirectTo: "/lobby",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return "Неверный логин или пароль";
          default:
            return "Not found error";
        }
      }
      throw error;
    }
  };

  return (
    <div>
      <AuthorizationPage handleSubmit={handleSubmit} />
    </div>
  );
}
