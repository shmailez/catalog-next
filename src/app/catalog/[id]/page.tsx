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
      <Link className="goBack" href={`/`}>
        <span></span>
        Вернуться к статьям
      </Link>
      <article>
        <pre>
          <code></code>
        </pre>
        <code></code>

        <h1>{article.title}</h1>

        <pre>{article.body}</pre>

        <span>автор: {article.userName}</span>
        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
