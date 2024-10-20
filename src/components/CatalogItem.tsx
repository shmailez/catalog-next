"use client";

import { useState } from "react";

export default function CatalogItemer({ article }: any) {
  const articleSeriatim = article.body.split("\n");

  const articleRandomise = article.body.split("\n");
  articleRandomise.sort(() => Math.random() - 0.5);

  let [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle((toggle = !toggle));
  };

  return (
    <>
      <h1>{article.title}</h1>
      <button className="deleteArticleButton" onClick={() => toggler()}>
        {toggle ? "перемешать" : "по порядку"}
      </button>
      {toggle ? (
        <ul>
          {articleSeriatim.map((x: any, i: any) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        // <pre>{article.body}</pre>
        <ul>
          {articleRandomise.map((x: any, i: any) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      )}
    </>
  );
}
