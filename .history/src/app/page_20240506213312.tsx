import { redirectFromUndefinedPages } from "@/api/services/redirectFromUndefinedPages";

export default async function Home() {
  redirectFromUndefinedPages();

  return <></>;
}
