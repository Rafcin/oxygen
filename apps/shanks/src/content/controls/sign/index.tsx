import { Button, capitalize } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export const Sign: React.FC<any> = React.memo(
  ({
    children,
    icon,
    provider,
    ...props
  }: {
    children?: React.ReactNode;
    icon: React.ReactNode;
    provider: string;
  }) => {
    const { data: session } = useSession();
    const handleSignIn = useMutation({
      mutationFn: (provider: string) => {
        return signIn(provider, { callbackUrl: "/" });
      },
    });
    return (
      <Button
        onClick={
          session
            ? (e) => {
                e.preventDefault();
                signOut({
                  callbackUrl: "/",
                });
              }
            : () => handleSignIn.mutate(provider)
        }
        variant="outlined"
        endIcon={!session ? icon : <FaSignOutAlt />}
        sx={{ paddingLeft: "25px", paddingRight: "25px" }}
      >
        {session ? (
          <span>Sign Out</span>
        ) : (
          <span>
            {handleSignIn.isLoading
              ? "..."
              : `Sign in with ${capitalize(provider)}`}
          </span>
        )}
      </Button>
    );
  }
);
