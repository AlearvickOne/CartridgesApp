import AuthorizationPage from "../components/AuthorizationPage";
import { signIn } from "./api/auth/[...nextauth]/auth";
import { AuthError } from "next-auth";

export default async function Home() {
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
            return "Проверьте введенные данные";
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
