import React from "react";
import { useRouter } from "next/router";

export const redirectFromUndefinedPages = () => {
  const { push } = useRouter();

  return <div>redirectFromUndefinedPages</div>;
};
