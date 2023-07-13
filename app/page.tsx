"use client";

import Link from "next/link";
import { useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-slate-900 min-w-max h-screen text-center p-6">
      <h1 className="text-6xl font-mono font-semibold text-emerald-400">
        Page Navigator
      </h1>
      <div className="grid grid-cols-2 mx-20 mt-10">
        <Link href="/" className="option bg-amber-800">
          Home
        </Link>
        <Link href="/discord" className="option bg-blue-400">
          Discord
        </Link>
        <h1 className="option bg-teal-500">Downloads</h1>
        <h1 className="option bg-red-500">Contact</h1>
      </div>
      <div>
        <p>You clicked the button {count} times</p>
        <div className="rounded-full bg-fuchsia-500 text-xl text-center mx-auto w-50">
          <p onClick={() => setCount(count + 1)}>+</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
