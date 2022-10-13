// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("test");

//     const posts = await db.collection("posts").find({}).toArray();

//     res.json(posts);
//   } catch (e) {
//     console.error(e);
//   }
// };
