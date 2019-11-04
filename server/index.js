const express = require("express");
const { getCollection, initDatabase } = require("./database");
const app = express();

const port = 8080;
app.get(`/api/allergies`, async (request, response) => {
  try {
    const allergyName = await getAllergies();
    return response.json(allergyName);
  } catch (error) {
    return response.end("Error");
  }
});

async function getAllergies() {
  const allergyCollection = await getCollection();
  const allergies = await allergyCollection.find({}).toArray();
  return allergies;
}

initDatabase().then(() => {
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});
