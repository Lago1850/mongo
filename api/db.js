// const mongoose = require('mongoose');

// const url = "mongodb+srv://user2004:user2004@cluster0.oanmhl0.mongodb.net/?retryWrites=true&w=majority"

// const db = async() => {
//     try {
//         const conn = await mongoose.connect(url);
//         console.log('connected');
//     } catch(error){
//         console.log(error);
//     }
// }

// module.exports = db;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user2004:user2004@cluster0.oanmhl0.mongodb.net/?retryWrites=true&w=majority"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}

run().catch(console.dir);

module.exports = client;
