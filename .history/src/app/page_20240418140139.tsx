import AuthorizationPage from "../components/AuthorizationPage";

export default function Home() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return <AuthorizationPage />;
}
