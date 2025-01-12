import { Collection, Db, MongoClient } from 'mongodb';

export interface AntikaDocument {
    name: string;
    description: string;
    path: string;
}

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const databaseName = 'CasaAntika';
const collectionName = 'images';

let db: Db;
let collection: Collection<AntikaDocument>;

const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB Connected");
        db = client.db(databaseName);
        collection = db.collection(collectionName);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

const listAll = async () => {
    checkConnection();
    const result = await collection.find().toArray();
    return result;
}

const addItem = async (item: AntikaDocument) => {
    checkConnection();
    await collection.insertOne(item);
}

function checkConnection() {
    if (!db || !collection) {
        throw Error('MongoDB not connected yet!');
    }
}

export default { connectDB, listAll, addItem };
