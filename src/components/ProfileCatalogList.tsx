"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileCatalogList({ post }: any) {
  console.log("post", post);
  const session = useSession();
  const e = session?.data?.user?.email;
  console.log("e", e);
  const muPost = post.filter(
    (x: any) => x.userEmail === session?.data?.user?.email
  );
  console.log("mu", muPost);
  return (
    <>
      <ul className="articleList">
        {muPost &&
          muPost.map((x: any) => (
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
