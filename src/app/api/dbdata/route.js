// pages/api/your-route.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('contact_db');
    const collection = database.collection('enrols');
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from database' });
  } finally {
    await client.close();
  }
}
