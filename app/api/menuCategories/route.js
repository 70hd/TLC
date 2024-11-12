// 1. Get access to prisma database from prisma client
import { PrismaClient } from "@prisma/client";


const database = new PrismaClient()

// 2. create an async function to find all of our categories
// Google/YouTube prisma postgres sql tutorial nextjs
// Can't check rn. Most videos within the past year should be good. Look for popular ones
// https://www.youtube.com/watch?v=GxUR4zIasB8 
// https://www.youtube.com/watch?v=8DiT-LdYXC0


export async function GET(request){
    try {
        const menu = await database.category.findMany({
            include: { items: true } // Assuming 'items' is the relation
        });
        
        return new Response(JSON.stringify(menu),{
            status: 200,
            headers: { "Content-Type": "application/json"}
        })
    } catch(error) {
        return new Response(
            JSON.stringify( {error: "Error fetching menu data"} ),
            { status: 500 } 
        )
    }
}