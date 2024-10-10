import GoogleButton from "@/components/GoogleButton";
import { Suspense } from "react";

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
  return <h2>LOADING</h2>;
}
