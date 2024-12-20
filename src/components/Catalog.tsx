import {
  getCatalogBoth,
  getCatalogDataMokky,
  getCatalogDataJsonserve,
  getCatalogFirst,
} from "@/services/catalogService";
import Link from "next/link";

export const metadata = {
  title: "BLOG",
};

export default async function CatalogList() {
  const post = await getCatalogDataJsonserve();
  // const allsrc = await getCatalogBoth(
  //   getCatalogDataMokky,
  //   getCatalogDataJsonserve
  // );
  ///why firstscr not work
  const firstsrc = await getCatalogFirst(
    getCatalogDataJsonserve,
    getCatalogDataMokky
  );
  console.log(firstsrc);

  const secondsrc = await getCatalogDataMokky();

  // console.log("allsr", allsrc[0]);

  return (
    <>
      <ul className="articleList">
        {secondsrc.map((x: any) => (
          <li className="articleItem" key={x.id}>
            <Link className="articleLink" href={`/catalog/${x.id}`}>
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
