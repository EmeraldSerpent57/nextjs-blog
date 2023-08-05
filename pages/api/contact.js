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

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.8yemkkd.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    try {
      const db = client.db(`${process.env.mongodb_database}`);
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
