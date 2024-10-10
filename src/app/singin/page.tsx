import GoogleButton from "@/components/GoogleButton";
import { Suspense } from "react";
import spinnersvg from "../../assets/images/spinnersvg.svg";
import Image from "next/image";

export default function Singin() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GoogleButton />
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <>
      {" "}
      <Image
        className="spinnersvg"
        src={spinnersvg}
        width={300}
        height={300}
        alt="Loading"
      />{" "}
    </>
  );
}
