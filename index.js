require("dotenv").config();
const express = require("express");
const { getCollection, initDatabase } = require("./server/database");
const path = require("path");
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

  if (!allergies) {
    throw new Error("can't find allergies");
  }
  return allergies;
}

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
