"use client";
import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const callbackUrl = "/extention";

  return (
    <>
      <button
        className="googlebutton"
        onClick={() => signIn("google", { callbackUrl })}
      >
        Sign In with Google
      </button>
    </>
  );
}
