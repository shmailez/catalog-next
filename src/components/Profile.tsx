"use client";
import { useSession } from "next-auth/react";

export default function ProfileInfo() {
  const session = useSession();

  return (
    <>
      <p>{session?.data?.user?.name}</p>
    </>
  );
}
