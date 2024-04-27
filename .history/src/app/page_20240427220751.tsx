"use server";
import Authorization from "../components/Authorization";

export default async function Home() {
  return (
    <div>
      <Authorization />
    </div>
  );
}
