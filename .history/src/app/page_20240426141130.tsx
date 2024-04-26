"use server";
import AuthorizationPage from "../components/AuthorizationPage";

export default async function Home() {
  return (
    <div>
      <AuthorizationPage />
    </div>
  );
}
