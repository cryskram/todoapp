import { prisma } from "@/lib/prisma";
import { BsPlusCircle, BsCircleFill, BsCircle } from "react-icons/bs";
import Link from "next/link";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {} from "react-icons/fi";

export default async function Home() {
  const allTodos = await prisma.todo.findMany();
  return (
    <div className="w-full mt-3">
      <div>
        <h1 className="text-center text-5xl mt-10">
          What&apos;s on your Todo?
        </h1>
      </div>
      <div className="mt-12">
        {allTodos.length === 0 ? (
          <div className="flex justify-center items-center gap-12 text-slate-500 text-center">
            <div>
              <p>You are all caught up!</p>
              <p>How about adding a Todo?</p>
            </div>
            <div>
              <Link href="/new">
                <BsPlusCircle className="text-mBlue rounded-full hover:bg-mBlue hover:text-mWhite text-3xl font-bold" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full text-center">
            {allTodos.map((todo) => (
              <div
                className="flex bg-mTodoBg m-2 rounded-xl px-3 py-1 mx-auto w-1/2 justify-between items-center"
                key={todo.id}
              >
                <div className="text-left">
                  <h1 className="text-3xl font-semibold">{todo.name}</h1>
                  <p className="text-mTodoDescText">{todo.description}</p>
                </div>
                <div className="flex">
                  <button>
                    <BsCircle className="text-3xl m-3 text-mBlue" />
                  </button>
                  <Link href="/">
                    <BiSolidUpArrowCircle className="text-3xl m-3 text-mOrange" />
                  </Link>
                  <Link href={`/api/delete/${todo.id}`}>
                    <AiFillDelete className="text-3xl m-3 text-mRed" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
