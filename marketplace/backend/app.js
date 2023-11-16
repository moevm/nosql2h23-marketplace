const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
 
async function countGamesAmountInDB() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("gamesdb");
        const collection = db.collection("games");
        const count = await collection.countDocuments();
        console.log(`В коллекции games ${count} экземпляров`);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}

countGamesAmountInDB().catch(console.error);