import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET(request) {
  try {
    const text = await database.homeText.findMany({
      include: true,
    });
    return new Response(JSON.stringify(text), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from database:", error); // Log the error
    return new Response(
      JSON.stringify({ error: "Error fetching text data", details: error.message }), // Include details for debugging
      { status: 500, headers: { "Content-Type": "application/json" } } // Set Content-Type for error response
    );
  }
}
