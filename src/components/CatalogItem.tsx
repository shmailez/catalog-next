"use client";

import { useEffect, useState } from "react";

export default function CatalogItemer({ article }: any) {
  console.log(typeof article.body === "string");
  // const articleSeriatim = article.body.split("\n");
  // const articleRandomise = article.body.split("\n");
  // articleRandomise.sort(() => Math.random() - 0.5);

  let articleSeriatim: [] = [];
  let articleRandomise: [] = [];

  const inside = function () {
    if (typeof article.body === "string") {
      articleSeriatim = article.body.split("\n");
      console.log("if");
      articleRandomise = article.body.split("\n");
      articleRandomise.sort(() => Math.random() - 0.5);
    }
  };

  inside();

  // useEffect(() => {
  //   inside();
  // }, []);

  let [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle((toggle = !toggle));
  };

  // useEffect(() => {
  //   inside();
  // }, [toggler]);

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
