const { MongoClient, ServerApiVersion } = require("mongodb");
const uri ="mongodb+srv://pc_builder:lAh5ney0vHTDOHxJ@cluster0.tcnszhx.mongodb.net/pcbuilder?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productsCollection = client.db("pcbuilder").collection("products");
    if (req.method === "GET") {
      // Handle request to get a single product by its ID
      if (req.query.id) {
        const productId = req.query.id;
        const product = await productsCollection.findOne({ _id: ObjectId(productId) });

        if (product) {
          res.send({ message: "success", status: 200, data: product });
        } else {
          res.status(404).send({ message: "Product not found", status: 404 });
        }
      } else {
        // Handle request to get all products
        const products = await productsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: products });
      }
    }
  

    if (req.method === "POST") {
      const news = req.body;
      const result = await productsCollection.insertOne(news);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;