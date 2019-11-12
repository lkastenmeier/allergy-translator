require("dotenv").config();
const express = require("express");
const { getCollection, initDatabase } = require("./server/database");

const path = require("path");
const app = express();

// Run parse for every request
app.use(express.json());

async function getAllergies() {
  const allergyCollection = await getCollection();
  const allergies = await allergyCollection.find({}).toArray();

  if (!allergies) {
    throw new Error("can't find allergies");
  }
  return allergies;
}

// Serve Collection allergies from DB
app.get("/api/allergies", async (request, response) => {
  try {
    const allergyName = await getAllergies();
    return response.json(allergyName);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response
      .status(500)
      .end("Error: The connection with the database failed");
  }
});

if (process.env.NODE_ENV === "production") {
  // Load environment
  app.use(express.static(path.join(__dirname, "client/build")));
  // Serve static files
  app.get("*", function(req, res) {
    // Return requests to React app
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  // Initalize DB
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
