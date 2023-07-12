"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
import { DiscordLogoIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function AuthButton() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { toast } = useToast();
  const { isLoaded: isSignInLoaded, signIn } = useSignIn();

  async function handleSignIn() {
    if (!isSignInLoaded) {
      return null;
    }

    try {
      setIsSigningIn(true);
      await signIn.authenticateWithRedirect({
        redirectUrl: "/signin/callback",
        redirectUrlComplete: "/",
        strategy: "oauth_discord",
      });
    } catch (error) {
      setIsSigningIn(false);
      const unknownError = "I have no idea what happened 😐";

      isClerkAPIResponseError(error)
        ? toast({
            title: "Error!",
            description: error.errors[0]?.longMessage || unknownError,
            variant: "destructive",
          })
        : toast({
            title: "Error!",
            description: unknownError,
            variant: "destructive",
          });
    }
  }

  return (
    <Button
      aria-label="Sign into Shalu with Discord!"
      onClick={() => handleSignIn()}
      disabled={isSigningIn || !isSignInLoaded}
      className="flex items-center gap-1.5"
    >
      {!isSigningIn ? (
        <>
          <DiscordLogoIcon />
          Continue with Discord
        </>
      ) : (
        <>
          <UpdateIcon className="animate-spin" />
          Signing in...
        </>
      )}
    </Button>
  );
}
