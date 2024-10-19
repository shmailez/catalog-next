import CatalogItemer from "@/components/CatalogItem";
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
        <CatalogItemer article={article} />
        <DeleteArticleButton article={article} />
      </article>
    </>
  );
}
