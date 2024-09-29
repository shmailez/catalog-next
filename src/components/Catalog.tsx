import { getCatalogData } from "@/services/catalogService";
import Link from "next/link";

export const metadata = {
  title: "BLOG",
};

export default async function CatalogList() {
  const post = await getCatalogData();

  return (
    <>
      <ul className="articleList">
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
      </ul>
    </>
  );
}
