require("dotenv").config();
const express = require("express");
const { getCollection, initDatabase } = require("./server/database");
const app = express();

app.use(express.json());

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
const DB_URL =
  "mongodb+srv//admin:Pyzq9IepHHMjkR6V@cluster0-d4w8h.mongodb.net/test?retryWrites=true&w=majority";

const DB_NAME = "allergytranslator";

const PORT = 8080;

initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
