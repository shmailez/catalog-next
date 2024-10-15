"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileCatalogList({ post }: any) {
  const session = useSession();
  const myPost = post.filter(
    (x: any) => x.userEmail === session?.data?.user?.email
  );
  return (
    <>
      <ul className="articleList">
        {myPost &&
          myPost.map((x: any) => (
            <li className="articleItem" key={x.id}>
              <Link href={`/profile/${x.id}`}>
                <h1 className="itemTitle">{x.title}</h1>

                <p className="itemBody">
                  <span className="itembodyHide"></span>
                  {x.body}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
