import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import AuthButton from "./auth-button";

export default function AuthCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>to continue to Shalu!</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col">
        <AuthButton />
      </CardContent>

      <CardFooter className="justify-end">
        <a
          href="https://clerk.com"
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:underline dark:text-slate-400"
        >
          Secured by Clerk
          <ExternalLinkIcon />
        </a>
      </CardFooter>
    </Card>
  );
}
