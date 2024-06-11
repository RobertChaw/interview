"use client";

import { Todo } from "@/app/todo";

export default function Home() {
  return (
    <main className="">
      <div className={"fixed top-0 inset-x-0 h-[280px] z-[-10] bg-gradient-to-r from-cyan-500 to-blue-500"}/>
      <div className={"my-[100px] flex justify-center"}>
        <Todo />
      </div>
    </main>
  );
}
