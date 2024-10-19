import DeleteArticleButton from "@/components/DeleteArticleButton";
import { getCatalogItem } from "@/services/catalogService";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function CatalogItem({ params }: { params: Params }) {
  const { id } = params;
  const article = await getCatalogItem(id);
  const arr = article.body.split("\n");
  arr.sort(() => Math.random() - 0.5);
  // console.log(array);

  return (
    <>
      <Link className="goBack" href={`/profile`}>
        <span></span>
        Вернуться к моим статьям
      </Link>
      <article>
        <h1>{article.title}</h1>
        <ul>
          {arr.map((x: any) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
