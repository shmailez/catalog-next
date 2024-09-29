"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  return (
    <>
      <header>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/catalog"}>Catalog</Link>
          {session?.data && <Link href={"/extention"}>Extention</Link>}
          {session?.data ? (
            <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
              SingOut
            </Link>
          ) : (
            <Link href={"/singin"}>Singin</Link>
          )}
        </nav>
      </header>
    </>
  );
}
