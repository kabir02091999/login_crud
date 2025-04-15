/* import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb://kabir02091999:z9lXOWbSmBVr6Fdg@ac-yshimdw-shard-00-00.lnqdgqx.mongodb.net:27017,ac-yshimdw-shard-00-01.lnqdgqx.mongodb.net:27017,ac-yshimdw-shard-00-02.lnqdgqx.mongodb.net:27017/?replicaSet=atlas-13d974-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb://kabir02091999:z9lXOWbSmBVr6Fdg@ac-yshimdw-shard-00-00.lnqdgqx.mongodb.net:27017,ac-yshimdw-shard-00-01.lnqdgqx.mongodb.net:27017,ac-yshimdw-shard-00-02.lnqdgqx.mongodb.net:27017/?replicaSet=atlas-13d974-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); // Comenta o elimina esta línea para pruebas prolongadas
  }
}
run().catch(console.dir);