// // 1. Import Prisma Client for database access
// import { PrismaClient } from "@prisma/client";

// const database = new PrismaClient();
// console.log("hello")



// export async function POST(request){
//   try {
//     console.log('body: ', request.body)
//     const { email } = request.body;
//   } catch (error) {
//     console.error("Error fetching data from database:", error);
//   }
// }







// // 2. Create an async function to handle POST requests for adding emails
// // This function will save a new email to the database
// // export default async function handler(req, res) {
// //   console.log('handler called')
// //   // Check if the request method is POST
// //   if (req.method === 'POST') {
// //     console.log('inside if');
// //     try {
// //       // 3. Destructure and validate the email from the request body
// //       const { email } = req.body;
// //       console.log("Received email:", email); // Debugging log for email input

// //       // Check if email is valid
// //       if (!email || typeof email !== 'string') {
// //         return res.status(400).json({ error: 'A valid email is required' });
// //       }

// //       // 4. Save the email entry to the database
// //       const newEmailEntry = await database.form.create({
// //         data: { email },
// //       });

// //       // Return a success response with the created entry
// //       return res.status(201).json(newEmailEntry);

// //     } catch (error) {
// //       console.error('Error saving email:', error);

// //       // Handle unique constraint error (email already exists)
// //       if (error.code === 'P2002') {
// //         return res.status(409).json({ error: 'Email already exists' });
// //       }

// //       return res.status(500).json({ error: 'Internal Server Error' });
// //     } finally {
// //       console.log('finally')
// //       await database.$disconnect();
// //     }
// //   } else {
// //     // 6. Return 405 Method Not Allowed if the request is not a POST
// //     res.setHeader('Allow', ['POST']);
// //     return res.status(405).json({ error: `Method ${req.method} not allowed. FIX ME` });
// //   }
// // }
// // // pages/api/submitemail.js
import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();
console.log("hello")


export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ message: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Add your email submission logic here
    console.log(`Received email: ${email}`);
    const newEmailEntry = await database.form.create(
      {
        data: { email }
      }
    )

    return new Response(JSON.stringify({ message: 'Email submitted successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error submitting email:', error);

    // handle unique constraint violation (email already exist)
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return new Response(JSON.stringify({ message: 'Email already exists.' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Internal Server Error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
