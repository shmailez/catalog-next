import DeleteArticleButton from "@/components/DeleteArticleButton";
import ProfileArticleList from "@/components/ProfileArticleList";
import { getCatalogItem } from "@/services/catalogService";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function CatalogItem({ params }: { params: Params }) {
  const { id } = params;
  const article = await getCatalogItem(id);
  const arr = article.body.split("\n");
  let arrObj = arr.map((x: any) => {
    return { text: x, info: [] };
  });

  return (
    <>
      <Link className="goBack" href={`/profile`}>
        <span></span>
        Вернуться к моим статьям
      </Link>
      <article>
        <h1>{article.title}</h1>
        <ProfileArticleList article={arrObj} />

        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
