import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET() {
  try {
    const buttons = await database.button.findMany();
    return new Response(JSON.stringify(buttons), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database fetch error in navButton:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching button data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
