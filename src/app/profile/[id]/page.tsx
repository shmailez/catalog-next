import DeleteArticleButton from "@/components/DeleteArticleButton";
import { getCatalogItem } from "@/services/catalogService";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function CatalogItem({ params }: { params: Params }) {
  const { id } = params;
  const article = await getCatalogItem(id);
  return (
    <>
      <Link className="goBack" href={`/profile`}>
        <span></span>
        Вернуться к моим статьям
      </Link>
      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
