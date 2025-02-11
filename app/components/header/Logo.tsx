"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Logo() {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <Image src="/trikon.png" alt="logo" width={130} height={120} />
    </div>
  );
}

export default Logo;
