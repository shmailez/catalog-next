"use client";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";

export default function ExtentionForm() {
  const session = useSession();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const id = new Date().toISOString();
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = session?.data?.user?.name;
    const userEmail = session?.data?.user?.email;
    const response = await fetch("https://175591125d7a11b5.mokky.dev/catalog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, body, userName, userEmail }),
    });
    if (response.ok) {
      let data = await response.json();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Заголовок</label>
      <input type="text" name="title" />
      <label htmlFor="body">Текст статьи</label>
      <textarea rows={5} name="body" />
      <button type="submit">Добавить</button>
    </form>
  );
}
