// Api routes run on server not client
//no react code here
// /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const client = await MongoClient.connect(
      "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db(); //database meetup
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
};
export default handler;
