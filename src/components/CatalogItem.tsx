"use client";

import { useState } from "react";

export default function CatalogItemer({ article }: any) {
  const arr = article.body.split("\n");
  arr.sort(() => Math.random() - 0.5);

  let [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle((toggle = !toggle));
  };

  return (
    <>
      <h1>{article.title}</h1>
      <button onClick={() => toggler()}>
        {toggle ? "перемешать" : "по порядку"}
      </button>
      {toggle ? (
        <pre>{article.body}</pre>
      ) : (
        <ul>
          {arr.map((x: any, i: any) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      )}
    </>
  );
}
