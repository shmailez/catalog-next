"use client";

import { useSession } from "next-auth/react";

export default function DeleteArticleButton({ article }: any) {
  const session = useSession();
  const enable = session?.data?.user?.name === article.userName;
  const id = article.id;

  async function deleteArticle(id: any) {
    console.log("fid", id);
    const response = await fetch(
      `https://175591125d7a11b5.mokky.dev/catalog/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("delete successful");
    }
  }

  return (
    <>
      {enable && (
        <button
          className="deleteArticleButton"
          onClick={() => deleteArticle(id)}
        >
          Удалить
        </button>
      )}
    </>
  );
}
