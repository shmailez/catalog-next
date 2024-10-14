"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileInfo() {
  const session = useSession();
  const avatar = session?.data?.user?.image;

  return (
    <>
      <h1>{session?.data?.user?.name}</h1>
      {session?.data && avatar && (
        <Image
          // className="avatar"
          src={avatar}
          width={100}
          height={100}
          alt="avatar"
          loading="lazy"
        />
      )}
    </>
  );
}
