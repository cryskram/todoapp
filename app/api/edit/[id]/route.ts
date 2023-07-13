import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const getTodo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!getTodo) {
    let error = {
      status: "fail",
      message: "No todo",
    };

    return new NextResponse(JSON.stringify(error), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json = {
    status: "success",
    data: {
      getTodo,
    },
  };

  return NextResponse.json(json);
}
