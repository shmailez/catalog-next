"use client";

import { useState } from "react";

export default function ProfileArticleList({ article }: any) {
  let [visiblePopup, setVisiblePopup] = useState(false);
  let [visibleForm, setVisibleForm] = useState(false);
  let [itemId, setItemId] = useState(0);

  const handlerVisiblePopup = (i: any) => {
    setItemId(i);
    setVisiblePopup((visiblePopup = !visiblePopup));
  };

  const handlerVisibleForm = (i: any) => {
    setItemId(i);
    setVisibleForm((visibleForm = !visibleForm));
  };

  const popUpId = article.filter((x: any, i: any) => i === itemId);

  return (
    <>
      <h1>ar change</h1>
      <ul>
        {article.map((x: any, i: any) => (
          <li key={i}>
            <h4 onClick={() => handlerVisiblePopup(i)}>{x.text}</h4>
          </li>
        ))}
      </ul>

      {visiblePopup &&
        popUpId.map((x: any, i: any) => (
          <div key={i} className="popupWrapper">
            <div className="popup">
              <button onClick={() => handlerVisiblePopup(i)}>close</button>
              <button onClick={() => handlerVisibleForm(i)}>form</button>
              <span>{x.text}</span>
              {visibleForm ? (
                <form action="">
                  <input type="text" />
                  <input type="submit" value="submit" />
                </form>
              ) : (
                <h2>Hello{i}</h2>
              )}
            </div>
          </div>
        ))}
    </>
  );
}
