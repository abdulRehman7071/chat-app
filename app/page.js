import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AllChats from "@/components/AllChats";
import Chat from "@/components/Chat";

export default function Home() {
  const cookieStore = cookies();

  const isToken = cookieStore.get("chatApp");
  const user = cookieStore.get("user");
  console.log("🚀 ~ file: page.js:14 ~ user:", user);
  if (!isToken) {
    redirect("/login");
  }
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen items-center justify-between md:px-8 sm:px-[5vw]">
      <AllChats />
      <Chat />
    </main>
  );
}
