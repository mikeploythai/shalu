import { AuthenticateWithRedirectCallback, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Callback() {
  const user = await currentUser();

  if (user) {
    redirect("/");
  }

  return <AuthenticateWithRedirectCallback />;
}
