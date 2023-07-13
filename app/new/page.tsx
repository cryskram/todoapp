import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {
  "use server";
  const title = data.get("title")?.valueOf();
  const desc = data.get("description")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    alert("Name/title of the Todo item cannot be empty");
  }

  await prisma.todo.create({
    data: {
      name: title as string,
      description: desc as string,
      completed: false,
    },
  });
  redirect("/");
};

const NewTodo = () => {
  return (
    <div className="w-full text-center mt-10">
      <div>
        <h1 className="text-3xl font-semibold">New Todo</h1>
      </div>
      <form className="flex gap-2 flex-col mt-12" action={createTodo}>
        <div>
          <input
            className="w-1/2 text-xl bg-transparent rounded-lg px-4 py-2 border-2 border-mSky outline-none peer-focus:outline-none"
            name="title"
            id="title"
            type="text"
            placeholder="What to do?"
            required
          />
        </div>
        <div>
          <input
            className="w-1/2 text-xl bg-transparent rounded-lg px-4 py-2 border-2 border-mSky outline-none peer-focus:outline-none"
            name="description"
            id="description"
            type="text"
            placeholder="What is this about? (optional)"
          />
        </div>
        <div>
          <button
            className="bg-mBlue px-3 py-2 m-3 rounded-xl text-2xl"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
