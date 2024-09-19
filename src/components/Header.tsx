import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/catalog"}>Catalog</Link>
          <Link href={"/extention"}>Extention</Link>
          <Link href={"/singin"}>Singin</Link>
        </nav>
      </header>
    </>
  );
}
