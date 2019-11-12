//initialize database and get data

//Dependencies
const { MongoClient } = require("mongodb");

let db = null;

collectionName = "allergies";
async function initDatabase(url, dbName) {
  //initialize database
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}
async function getCollection() {
  //
  if (!db) {
    initDatabase();
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
