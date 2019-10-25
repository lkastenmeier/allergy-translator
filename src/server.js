const express = require("express");
const { getCollection } = require("./database");
const { initDatabase } = require("./database");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 8080;

app.get("/api/allergydata", async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "application/json" });
    const allergyName = await get(request.params.name);
    return response.end(JSON.stringify(allergyName));
  } catch (error) {
    throw error;
  }
});

app.post("/api/allergydata", async (request, response) => {
  try {
    let body = {};
    request.on("data", function(data) {
      body += data;
    });
    request.on("end", async function() {
      response.writeHead(200, { "Content-Type": "application/json" });
      const allergydata = await set(body);
      return response.end({ allergydata });
    });
  } catch (error) {
    throw error;
  }
});

async function set(allergydata) {
  const allergyCollection = await getCollection("allergydata");
  await allergyCollection.insertOne({ allergydata });
}

async function get(key) {
  const allergyCollection = await getCollection();
  const result = await allergyCollection.find({}).toArray();
  console.log(result);
  return result;
}

initDatabase().then(() => {
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});
