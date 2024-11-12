import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET(request) {
  try {
    const text = await database.footerText.findMany({
      include: {
        category: true, // Specify the related model to include
      },
    });
    return new Response(JSON.stringify(text), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from database:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching text data", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
