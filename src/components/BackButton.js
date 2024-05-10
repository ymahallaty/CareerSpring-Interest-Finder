import React from "react";
import Link from "next/link";

export default function BackButton() {
  return (
    <>
      <button className="blueButtons flex justify-center">
        <Link href="/" className="w-full h-full flex items-center
        justify-center" >Back</Link>
      </button>
    </>
  );
}
