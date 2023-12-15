// Api routes run on server not client
//no react code here
// /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db(); //database meetup
    const todoCollection = db.collection("todo");
    const result = await todoCollection.insertOne(data);
    console.log(result, "result");

    client.close();
    res.status(201).json({ message: "TOdo Inserted" });
  }
};
export default handler;
