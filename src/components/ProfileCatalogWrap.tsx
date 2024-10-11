import { getCatalogData } from "@/services/catalogService";
import Link from "next/link";
import ProfileCatalogList from "./ProfileCatalogList";

export default async function ProfileCatalogWrap() {
  const post = await getCatalogData();
  return (
    <>
      <ProfileCatalogList post={post} />
      {/* <ul className="articleList">
        {post.map((x: any) => (
          <li className="articleItem" key={x.id}>
            <Link href={`/catalog/${x.id}`}>
              <h1 className="itemTitle">{x.title}</h1>

              <p className="itemBody">
                <span className="itembodyHide"></span>
                {x.body}
              </p>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
