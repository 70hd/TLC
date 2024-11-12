import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET(request, { params }) {
  const { slug } = params; // Get slug from params
  console.log("Fetching products for slug:", slug);

  try {
    // Fetch the category based on the slug, including related smallProduct items
    const productCategory = await database.smallProductCategory.findUnique({
      where: { name: slug },
      include: {
        smallProduct: true, // Fetch associated small products
      },
    });

    // If no category is found, return 404
    if (!productCategory) {
      console.log("Product category not found for slug:", slug);
      return new Response(
        JSON.stringify({ error: "Product category not found" }),
        { status: 404 }
      );
    }

    // Return the fetched data
    return new Response(JSON.stringify(productCategory), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching product category:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching product category" }),
      { status: 500 }
    );
  }
}
