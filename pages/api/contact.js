/* eslint-disable no-undef */
//need to have the API routes here so we dont expose it on the client side
//api/contact

import { MongoClient } from "mongodb";

async function handler(req, res) {
  //handle the incoming request

  //check the request method, need a post request
  if (req.method === "POST") {
    //extract data from body of request
    const { email, name, message } = req.body;

    //validate it, dont trust client side validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
        //if any of the above is true, the request fails
        res.status(422).json({message: 'Invalid input.'});
        return;
    }
    //if it succeeds, store it in a database
    const newMessage = {
        email,
        name,
        message
    };

    let client;

    //set up a connection string to use the environment variables in next.config
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.8yemkkd.mongodb.net/?retryWrites=true&w=majority`;
   
    //wrap in a try/catch block just in case it fails
    try {
    //connect to mongodb to store your info
    client = await MongoClient.connect(connectionString);
    } catch {
      //dont continue with execution
      res.status(500).json({message: 'Could not connect to database.'})
      return;
    }

    //wrap in a try/catch block just in case it fails
    try {
    //use the connection to insert data
    const db = client.db(`${process.env.mongodb_database}`);
    // use the db to enter one new document in to a collection
    const result = await db.collection('contact-messages').insertOne(newMessage);
    newMessage.id = result.insertedId;  //to automatically generate an id for each message
    } catch (error) {
      //close the connection, return, and send back a response
      client.close();
      res.status(500).json({message: 'Could not store message.'})
      return;
    }

    //close the client
    client.close();

    res.status(201).json({message: 'Message was successfully sent!'});
  }
}

export default handler;
