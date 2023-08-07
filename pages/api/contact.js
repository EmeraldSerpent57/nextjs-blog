//api/contact
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://amvoce1221:4NuqXdOzMP5z96l0@cluster0.8yemkkd.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    try {
      const db = client.db("my-blog");
      const result = await db
        .collection("contact-messages")
        .insertOne(newMessage);
      newMessage.id = result.insertedId; //to automatically generate an id for each message
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could not store message." });
      return;
    }

    client.close();

    res.status(201).json({ message: "Message was successfully sent!" });
  }
}

export default handler;
