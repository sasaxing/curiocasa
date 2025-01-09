import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

const listAll = async () => {
    const databaseName = 'curiocasa';
    const collectionName = 'images';

    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    console.log(result);
    return result;
}

export default { connectDB, listAll };
