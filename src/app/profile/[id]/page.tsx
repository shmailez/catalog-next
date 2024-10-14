import DeleteArticleButton from "@/components/DeleteArticleButton";
import { getCatalogItem } from "@/services/catalogService";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function CatalogItem({ params }: { params: Params }) {
  const { id } = params;
  const article = await getCatalogItem(id);
  // const newStr = article.body.replace(/\n/g, "</li><li>");
  // const newStr = article.body;
  // newStr.innerHTML = newStr.innerHTML.replace(/\n/g, "</li><li>");
  // console.log(article.body);
  // console.log(newStr);
  return (
    <>
      <Link className="goBack" href={`/profile`}>
        <span></span>
        Вернуться к моим статьям
      </Link>
      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        {/* <ul>
          <li>
            <code>{newStr}</code>
          </li>
        </ul> */}

        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
