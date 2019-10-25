const { MongoClient } = require("mongodb");
let db = null;
async function initDatabase() {
  const dbName = "allergytranslator";
  const url = `mongodb://localhost:27017/${dbName}`;
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection() {
  if (!db) {
    await initDatabase();
  }
  return db.collection("allergydata");
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
