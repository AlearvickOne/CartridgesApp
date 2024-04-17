import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "72ba23d3d9672364ba2b",
      clientSecret: "1080dba3a9daf6879ec6c74e39dda5815f0fb854",
    }),
  ],
};
