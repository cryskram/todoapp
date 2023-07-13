import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  await prisma.todo
    .delete({ where: { id: id } })
    .then(() => new NextResponse(JSON.stringify({ message: "removed todo" })))
    .then(() => redirect("/"))
    .catch((e) => new NextResponse(JSON.stringify(e)));
}
