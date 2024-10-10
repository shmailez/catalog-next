"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const avatar = session?.data?.user?.image;
  console.log(session?.data?.user?.image);

  return (
    <>
      <header>
        {/* {session?.data && (
          <p className="hellodolly">{session?.data?.user?.name}</p>
        )}
        {session?.data && avatar && (
          <Image
            className="avatar"
            src={avatar}
            width={300}
            height={300}
            alt="avatar"
            loading="lazy"
          />
        )} */}
        <nav>
          <Link href={"/"}>Home</Link>
          {session?.data && <Link href={"/extention"}>Extention</Link>}
          {session?.data ? (
            <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
              SingOut
            </Link>
          ) : (
            <Link href={"/singin"}>Singin</Link>
          )}
          <Link href={"/"}>
            {session?.data && (
              <p className="hellodolly">{session?.data?.user?.name}</p>
            )}
            {session?.data && avatar && (
              <Image
                className="avatar"
                src={avatar}
                width={300}
                height={300}
                alt="avatar"
                loading="lazy"
              />
            )}
          </Link>
        </nav>
      </header>
    </>
  );
}
